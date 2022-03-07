import { fireEvent, render, screen } from "@testing-library/react";
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
        fireEvent.click(
          screen.getByRole("button", { name: /add to counter/i })
        );
      });
      it("renders current count=1", () => {
        const findBy = await findByText;
        expect(screen.getByText(/Current Count: 1/)).toBeInTheDocument();
      });
    });

    describe("when - is clicked", () => {
      beforeEach(() => {
        fireEvent.click(
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
          fireEvent.click(
            screen.getByRole("button", { name: /add to counter/i })
          );
        });
        it("renders current count=18", () => {
          expect(screen.getByText(/Current Count: 18/)).toBeInTheDocument();
        });
      });
      describe("when + is clicked twice", () => {
        it("renders current count=27", () => {
          const increment = screen.getByRole("button", {
            name: /add to counter/i,
          });
          user.dblClick(increment);
          expect(screen.getByText(/Current Count: 27/)).toBeInTheDocument();
        });
      });
      describe("when - is clicked", () => {
        beforeEach(() => {
          fireEvent.click(
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
      it("renders current count=10", () => {
        expect(screen.getByText(/Current Count: 10/)).toBeInTheDocument();
      });
    });
  });
});
