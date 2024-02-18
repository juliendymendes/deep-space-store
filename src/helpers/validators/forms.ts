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

export function validadePhone(value: string) {
  if (/^\d{2}\d{4,5}\d{4}$/.test(value)) {
    return true;
  }

  return "Telefone deve ter 11 caracteres númericos";
}
