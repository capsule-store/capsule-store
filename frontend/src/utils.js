const padPrice = (price) => {
  const priceStr = (Math.round(price * 100) / 100).toString();
  if (priceStr.includes('.')) {
    const cents = priceStr.split('.')[1].padEnd(2, '0');
    return `${priceStr.split('.')[0]}.${cents}`;
  }
  return `${priceStr}.00`;
};

export { padPrice };
