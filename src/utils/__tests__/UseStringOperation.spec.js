import { expect, test, describe } from "vitest";
import { toCamelCase, toSnakcCase } from "../useStringOperation";

describe("useStringOperation", () => {
  test("Should transform string to Camel case", () => {
    expect(toCamelCase("hello-world")).toBe("helloWorld");
    expect(toCamelCase("hello_world")).toBe("helloWorld");
    expect(toCamelCase("helloWorld")).toBe("helloWorld");
  });

  test("Should transform string to Snake case", () => {
    expect(toSnakcCase("helloWorld")).toBe("hello_world");
    expect(toSnakcCase("hello_world")).toBe("hello_world");
    expect(toSnakcCase("helloWorld")).toBe("hello_world");
  });
});
