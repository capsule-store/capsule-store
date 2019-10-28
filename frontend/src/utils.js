const padPrice = (price) => {
  if (price.toString().includes('.')) {
    const cents = price.split('.')[1].padEnd(2, '0');
    return `${price.split('.')[0]}.${cents}`;
  }
  return `${price}.00`;
};

export { padPrice };
