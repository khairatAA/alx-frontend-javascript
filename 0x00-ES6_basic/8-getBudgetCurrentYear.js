// No need to create empty objects before adding in properties
function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const incomeVar = `income-${getCurrentYear()}`;
  const gpgVar = `gdp-${getCurrentYear()}`;
  const capitaVar = `capita-${getCurrentYear()}`;

  const budget = {
    [incomeVar]: income,
    [gpgVar]: gdp,
    [capitaVar]: capita,
  };

  return budget;
}
