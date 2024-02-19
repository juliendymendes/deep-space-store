export function requiredRules(value: string) {
  if (value) {
    return true;
  }
  return "Campo obrigatório";
}

export function validateCpf(value: string) {
  if (/^\d{11}$/.test(value)) {
    return true;
  }

  return "CPF deve ter 11 caracteres númericos.";
}

export function validatePhone(value: string) {
  if (/^\(\d{2}\)\d{5}\d{4}$/.test(value)) {
    return true;
  }

  return "Telefone deve estar no formato (xx)xxxxxxxxx";
}

export function validateCardNumber(value: string) {
  if (/^\d{4} \d{4} \d{4} \d{4}$/.test(value)) {
    return true;
  }

  return "Número do cartão deve conter 16 caracteres numéricos.";
}