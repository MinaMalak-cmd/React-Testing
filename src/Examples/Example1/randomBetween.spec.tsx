import { randomBetween } from "./randomBetween";

describe("randomBetween", () => {
  const randomSpy = jest.spyOn(Math, "random");
  describe("when Math.random() returns 0", () => {
    global.console.log = jest.fn();
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0);
    });
    it("called with min=3 and max=5 returns 3", () => {
      expect(randomBetween(3, 5)).toBe(3);
      expect(Math.random).toHaveBeenCalledTimes(1);
      expect(global.console.log).toHaveBeenCalledTimes(1);
    });
  });
  describe("when Math.random() returns 0.5", () => {
    beforeEach(() => {
      //mock implementation
      randomSpy.mockClear().mockImplementation(() => 0.5);
    });
    it("called with min=3 and max=5 returns 4", () => {
      expect(randomBetween(3, 5)).toBe(4);
    });
  });
  describe("when Math.random() returns 0.99999", () => {
    beforeEach(() => {
      randomSpy.mockClear().mockReturnValue(0.99999);
    });
    it("called with min=3 and max=5 returns 5", () => {
      expect(randomBetween(3, 5)).toBe(5);
    });
  });
});
