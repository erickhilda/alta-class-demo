import { expect, assert, test, describe } from "vitest";
import { sumOf, substractOf, multiplyOf, divideOf, areaOf } from "../useMathOperation";

describe("useMathOperation", () => {
  test("should add a + b and resulting a + b", () => {
    expect(sumOf(1, 2)).toBe(3);
  });

  test("should substract b from b", () => {
    expect(substractOf(1, 2)).toBe(-1);
  });

  test("should multiply a * b", () => {
    expect(multiplyOf(1, 2)).toBe(2);
  });

  test("should divide a / b", () => {
    expect(divideOf(1, 2)).toBe(0.5);
  });

  test("should return error if a or b is negative", () => {
    expect(areaOf(-1, 2)).toBe("value cannot be negative");
    expect(areaOf(1, -2)).toBe("value cannot be negative");
  });

  test("should return error if a or b is undefined", () => {
    expect(areaOf(undefined, 2)).toBe("value cannot be undefined");
    expect(areaOf(1, undefined)).toBe("value cannot be undefined");
  });
});
