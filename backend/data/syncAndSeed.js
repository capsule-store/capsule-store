const connection = require('./connection');

const { Category, Product } = require('./models/');

const create = (Model) => {
  Model.create();
};

const syncAndSeed = async () => {
  await connection.sync({ force: true });

  const categoryNames = [
    'Outfit',
    'Accessories',
    'Transportation',
    'Food & Drinks',
    'Office Supplies',
    'Electronics',
  ];

  const [
    outfit,
    accessories,
    transportation,
    foodDrinks,
    officeSupplies,
    electronics,
  ] = await Promise.all(categoryNames.map((name) => Category.create({ name })));

  const woolRunners = await Product.create({
    name: "Men's Wool Runners",
    brand: 'AllBird',
    price: 95,
    description:
      "A remarkable shoe that's naturally soft, cozy all over, and fits your every move.",
    image:
      'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:F2F2F2/https://cdn.shopify.com/s/files/1/1104/4168/products/Men_s_Wool_Runners_-_Natural_Black__Black_Sole__-_imageAngle.png?v=1557940737',
    categoryId: outfit.id,
  });

  const backpack = await Product.create({
    name: 'Backpack',
    brand: 'Rains',
    price: 110,
    description: 'Backpack is a modern rucksack with a strong Rains identity.',
    image:
      'https://cdn.shopify.com/s/files/1/2418/1767/products/Backpack-Bags-1220-01_Black-37_1400x1400.jpg?v=1571158394',
    categoryId: accessories.id,
  });

  const boosted = await Product.create({
    name: 'Boosted Plus',
    brand: 'Boosted Board',
    price: 1399,
    description: 'The new classic',
    image:
      'https://images.ctfassets.net/axbo81ontyws/5SD88gO76goCgKAOi4eOg6/aaaf9e80ecfaa9f1f45d68a6349bb803/boosted-board-plus-1-1.jpg',
    categoryId: transportation.id,
  });

  const soylent = await Product.create({
    name: 'Soylent Drink- Mint Chocolate',
    brand: 'Soylent',
    price: 37.5,
    description:
      'Minty chocolate deliciousness. Twist the cap and dive into our brand new flavor.',
    image:
      'https://cdn.shopify.com/s/files/1/0003/5933/3902/products/091519_soylent_Drinks_Hero_1468x1100_A01-MINTCHOCOLATE_1400x1400.jpg?v=1569964156',
    categoryId: foodDrinks.id,
  });

  const notebook = await Product.create({
    name: 'Classic Notebook',
    brand: 'Moleskine',
    price: 4.95,
    description:
      'The Classic Notebook can trace its origins back to the iconic legendary notebook used by artists, writers and thinkers over the past 2 centuries.',
    image:
      'https://us.moleskine.com/ccstore/v1/images/?source=/file/v4160360617349567681/products/gtin_9788883707247_01_1500x1500.jpg&height=500&width=500',
    categoryId: officeSupplies.id,
  });

  const pixel4 = await Product.create({
    name: 'Pixel 4',
    brand: 'Google',
    price: 799,
    description:
      'Motion Sense,2 an evolved camera, and the new Google Assistant3 make Pixel 4 our most helpful phone yet.',
    image:
      'https://lh3.googleusercontent.com/l8aixCpfC6jZx_f3RDBs740eBHvqcP8hr5ImuYSdDkZRIRFQbfbgZeHHYnfZ6p11EZRDrsQSuS2G3pvBhWvqiyg=rw-w1010',
    categoryId: electronics.id,
  });
};

module.exports = syncAndSeed;
