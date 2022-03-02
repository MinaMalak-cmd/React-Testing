import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

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
});
