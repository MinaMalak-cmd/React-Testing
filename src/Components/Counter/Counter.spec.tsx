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
        user.type(screen.getByLabelText(/incrementor/i), "9");
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

      describe("when - is clicked", () => {
        beforeEach(() => {
          fireEvent.click(
            screen.getByRole("button", { name: /Subtract from counter/i })
          );
        });
        it("renders current count=-18", () => {
          expect(screen.getByText(/Current Count: -18/)).toBeInTheDocument();
        });
      });
    });
  });
});
