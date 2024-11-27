import { typeOfNumber } from "./typeOfNum";

describe("Test for typeOfNumber function", () => {
  it("Test with different numbers", () => {
    expect(typeOfNumber(1)).toBe("Ошибка");
    expect(typeOfNumber(10)).toBe("10 — составное число");
    expect(typeOfNumber(11)).toBe("11 — простое число");
    expect(typeOfNumber(1001)).toBe("Ошибка");
  });
});