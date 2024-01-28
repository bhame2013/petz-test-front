export function formatNumberToCurrency(money: number) {
  return money.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });
}
