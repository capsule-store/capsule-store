const roundPrice = (price) => {
  let numPrice = price;
  if (typeof price === 'string') {
    numPrice = parseFloat(price);
  }
  return Math.round(numPrice * 100) / 100;
};

const padPrice = (price) => {
  const priceStr = roundPrice(price).toString();
  if (priceStr.includes('.')) {
    const cents = priceStr.split('.')[1].padEnd(2, '0');
    return `${priceStr.split('.')[0]}.${cents}`;
  }
  return `${priceStr}.00`;
};

export { roundPrice, padPrice };
