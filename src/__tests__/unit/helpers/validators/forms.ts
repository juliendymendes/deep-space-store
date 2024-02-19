import { validateCpf, validatePhone } from "../../../../helpers/validators/forms";

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


describe("validadePhone", () => {
	it("should return true because it is in the format (xx)xxxxxxxxx", () => {
		expect(validatePhone("(67)992368745")).toBeTruthy()
	})

	it("should return an error message because it is not in the format (xx)xxxxxxxxx", () => {
		expect(validatePhone("67992368745")).toBe("Telefone deve estar no formato (xx)xxxxxxxxx")
	})

	it("should return an error message because it is not in the format (xx)xxxxxxxxx", () => {
		expect(validatePhone("(67)99236-8745")).toBe("Telefone deve estar no formato (xx)xxxxxxxxx")
	})

	it("should return an error message because it is not in the format (xx)xxxxxxxxx", () => {
		expect(validatePhone("6799236-8745")).toBe("Telefone deve estar no formato (xx)xxxxxxxxx")
	})

})
