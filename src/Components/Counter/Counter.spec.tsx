import { render, screen, waitFor } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";

describe("counter", () => {
  describe("initialized with counter default counter=0, and description My Counter", () => {
    beforeEach(() => {
      render(<Counter description="My Counter" defaultCount={0} />);
    });

    it("renders title as 'My counter'", () => {
      expect(screen.getByText(/my counter/i)).toBeInTheDocument();
    });
    it("renders 'Current Count: 0'", () => {
      expect(screen.getByText(/Current Count: 0/)).toBeInTheDocument();
    });
    describe("when + is clicked", () => {
      beforeEach(() => {
        user.click(screen.getByRole("button", { name: /add to counter/i }));
      });
      it("renders current count=1", async () => {
        const findBy = await screen.findByText(/Current Count: 1/);
        // expect(screen.getByText(/Current Count: 1/)).toBeInTheDocument(); //in case of sync code
        expect(findBy).toBeInTheDocument(); //in case of async code
      });
    });

    describe("when - is clicked", () => {
      beforeEach(() => {
        user.click(
          screen.getByRole("button", { name: /Subtract from counter/i })
        );
      });
      it("renders current count=-1", () => {
        expect(screen.getByText(/Current Count: -1/)).toBeInTheDocument();
      });
    });
  });
  describe("initialized with counter default counter=9, and description 'WWW'", () => {
    beforeEach(() => {
      render(<Counter description="WWW" defaultCount={9} />);
    });
    it("renders title as 'WWW'", () => {
      expect(screen.getByText(/WWW/)).toBeInTheDocument();
    });
    it("renders 'Current Count: 9'", () => {
      expect(screen.getByText("Current Count: 9")).toBeInTheDocument();
    });
    describe("when user enters 9 as input value", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/incrementor/i), "{selectall}9");
      });
      describe("when + is clicked", () => {
        beforeEach(() => {
          user.click(screen.getByRole("button", { name: /add to counter/i }));
        });
        it("renders current count=18", async () => {
          const findBy = await screen.findByText(/Current Count: 18/);
          expect(findBy).toBeInTheDocument();
        });
      });
      describe("when + is clicked twice", () => {
        beforeEach(async () => {
          const increment = screen.getByRole("button", {
            name: /add to counter/i,
          });
          user.dblClick(increment);
          await screen.findByText(/Current Count: 27/);
        });
        it("renders current count=27", async () => {
          expect(screen.getByText(/Current Count: 27/)).toBeInTheDocument();
        });
      });
      describe("when - is clicked", () => {
        beforeEach(() => {
          user.click(
            screen.getByRole("button", { name: /Subtract from counter/i })
          );
        });
        it("renders current count=0", () => {
          expect(screen.getByText(/Current Count: 0/)).toBeInTheDocument();
        });
      });
    });
    describe("when user delete input value then increment", () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/incrementor/i), "{selectall}{del}");
        user.click(screen.getByRole("button", { name: /add to counter/i }));
      });
      it("renders current count=10", async () => {
        const findBy = await screen.findByText(/Current Count: 10/);
        expect(findBy).toBeInTheDocument();
      });
    });
  });
});
