// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a simple palindrome like 'racecar'", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome like 'car'", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("is case-insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
    expect(isPalindrome("Mom")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error if input contains non-alphabetic characters", () => {
    expect(() => isPalindrome("racecar!")).toThrow(
      "Input must only contain alphabetic characters"
    );
    expect(() => isPalindrome("race123")).toThrow(
      "Input must only contain alphabetic characters"
    );
  });

  it("throws an error if input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Input must be a string");
    expect(() => isPalindrome(null)).toThrow("Input must be a string");
  });
});
