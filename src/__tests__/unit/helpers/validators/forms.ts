import { validateCpf } from "../../../../helpers/validators/forms";

describe("validateCpf", () => {
  it("should return true for having 11 numeric characters", () => {
    expect(validateCpf("12556789210")).toBeTruthy();
  });

  it("should return error message for having less than 11 numeric characters", () => {
    expect(validateCpf("1234567891")).toBe(
      "CPF deve ter 11 caracteres númericos."
    );
  });

  it("should return error message for having more 11 numeric characters", () => {
    expect(validateCpf("113456789012")).toBe(
      "CPF deve ter 11 caracteres númericos."
    );
  });
});
