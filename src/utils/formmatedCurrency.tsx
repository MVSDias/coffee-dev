export function FormatCurrency(item: number) {
  const valueFormat = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(item);

  return valueFormat;
};
