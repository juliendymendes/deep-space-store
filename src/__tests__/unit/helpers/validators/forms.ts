import {
  requiredRules,
  validateCardNumber,
  validateCpf,
  validatePhone,
} from "../../../../helpers/validators/forms";

describe("validateCpf", () => {
  it("should return true for having 11 numeric characters", () => {
    expect(validateCpf("12556789210")).toBeTruthy();
  });

  it("should return an error message for having less than 11 numeric characters", () => {
    expect(validateCpf("1234567891")).toBe(
      "CPF deve ter 11 caracteres númericos."
    );
  });

  it("should return an error message for having more 11 numeric characters", () => {
    expect(validateCpf("113456789012")).toBe(
      "CPF deve ter 11 caracteres númericos."
    );
  });
});

describe("validatePhone", () => {
  it("should return true because it is in the format (xx)xxxxxxxxx", () => {
    expect(validatePhone("(67)992368745")).toBeTruthy();
  });

  it("should return an error message because it is not in the format (xx)xxxxxxxxx", () => {
    expect(validatePhone("67992368745")).toBe(
      "Telefone deve estar no formato (xx)xxxxxxxxx"
    );
  });

  it("should return an error message because it is not in the format (xx)xxxxxxxxx", () => {
    expect(validatePhone("(67)99236-8745")).toBe(
      "Telefone deve estar no formato (xx)xxxxxxxxx"
    );
  });

  it("should return an error message because it is not in the format (xx)xxxxxxxxx", () => {
    expect(validatePhone("6799236-8745")).toBe(
      "Telefone deve estar no formato (xx)xxxxxxxxx"
    );
  });
});

describe("validateCardNumber", () => {
  it("should return true because it is in the format xxxx xxxx xxxx xxxx.", () => {
    expect(validateCardNumber("1234 1234 1234 1234")).toBeTruthy();
  });

  it("should return an error message because it is not in the format xxxx xxxx xxxx xxxx.", () => {
    expect(validateCardNumber("1234123412341234")).toBe(
      "Número do cartão deve conter 16 caracteres numéricos no formato xxxx xxxx xxxx xxxx."
    );
  });

  it("should return an error message for having more than 16 numeric characters and it is not in the format xxxx xxxx xxxx xxxx.", () => {
    expect(validateCardNumber("1234 1234 1234 1234 1")).toBe(
      "Número do cartão deve conter 16 caracteres numéricos no formato xxxx xxxx xxxx xxxx."
    );
  });

  it("should return an error message for having less than 16 numeric characters and it is not in the format xxxx xxxx xxxx xxxx.", () => {
    expect(validateCardNumber("1234 1234 1234 123")).toBe(
      "Número do cartão deve conter 16 caracteres numéricos no formato xxxx xxxx xxxx xxxx."
    );
  });
});

describe("requiredRules", () => {
  it("must return true because it is not empty", () => {
    expect(requiredRules("Test")).toBeTruthy();
  });

  it("must return an error message because it is empty", () => {
    expect(requiredRules("")).toBe("Campo obrigatório");
  });
});
