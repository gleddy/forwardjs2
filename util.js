export const convertToUSD = priceInCents => {
  return `$${(priceInCents / 100).toFixed(2)}`;
};
