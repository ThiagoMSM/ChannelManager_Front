const getPasswordStrength = (password: string): number => {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1; //Letra maiúscula
  if (/[a-z]/.test(password)) score += 1; //Letra minúscula
  if (/\d/.test(password)) score += 1; //Número
  if (/[\W_]/.test(password)) score += 1; //Caractere especial
  return score;
};


const getStrengthLabel = (score: number): string => {
  switch (score) {
    case 0:
    case 1:
      return "Sua senha fraca. Utilize letras maiúsculas, minúsculas, numeros e carácteres especiais.";
    case 2:
      return "Senha fraca ainda está fraca. Tente adicionar mais caracteres e numeros.";
    case 3:
      return "Sua senha é ótima. Bom trabalho!";
    case 4:
      return "Sua senha é ótima. Bom trabalho!";
    case 5:
      return "Sua senha está perfeita. Bom trabalho!";
    default:
      return "";
  }
};
const getBarColor = (score: number): string => {
    if (score <= 1) return "#f00";
    if (score === 2) return "#f90";
    if (score === 3) return "#0cf";
    if (score === 4) return "#0cf";
    return "#0c0";
  };






// Export setPassword so it can be used to update the password from your component
export { getPasswordStrength, getStrengthLabel, getBarColor };