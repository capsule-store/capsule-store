const connection = require('./connection');
const { Category, Product } = require('./models/');

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

  const products = [
    {
      name: "Men's Wool Runners",
      brand: 'AllBird',
      price: 95,
      description:
        "A remarkable shoe that's naturally soft, cozy all over, and fits your every move.",
      image:
        'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:F2F2F2/https://cdn.shopify.com/s/files/1/1104/4168/products/Men_s_Wool_Runners_-_Natural_Black__Black_Sole__-_imageAngle.png?v=1557940737',
      categoryId: outfit.id,
    },
    {
      name: 'Backpack',
      brand: 'Rains',
      price: 110,
      description:
        'Backpack is a modern rucksack with a strong Rains identity.',
      image:
        'https://cdn.shopify.com/s/files/1/2418/1767/products/Backpack-Bags-1220-01_Black-37_1400x1400.jpg?v=1571158394',
      categoryId: accessories.id,
    },
    {
      name: 'Boosted Plus',
      brand: 'Boosted Board',
      price: 1399,
      description: 'The new classic',
      image:
        'https://images.ctfassets.net/axbo81ontyws/5SD88gO76goCgKAOi4eOg6/aaaf9e80ecfaa9f1f45d68a6349bb803/boosted-board-plus-1-1.jpg',
      categoryId: transportation.id,
    },
    {
      name: 'Soylent Drink- Mint Chocolate',
      brand: 'Soylent',
      price: 37.5,
      description:
        'Minty chocolate deliciousness. Twist the cap and dive into our brand new flavor.',
      image:
        'https://cdn.shopify.com/s/files/1/0003/5933/3902/products/091519_soylent_Drinks_Hero_1468x1100_A01-MINTCHOCOLATE_1400x1400.jpg?v=1569964156',
      categoryId: foodDrinks.id,
    },
    {
      name: 'Classic Notebook',
      brand: 'Moleskine',
      price: 4.95,
      description:
        'The Classic Notebook can trace its origins back to the iconic legendary notebook used by artists, writers and thinkers over the past 2 centuries.',
      image:
        'https://us.moleskine.com/ccstore/v1/images/?source=/file/v4160360617349567681/products/gtin_9788883707247_01_1500x1500.jpg&height=500&width=500',
      categoryId: officeSupplies.id,
    },
    {
      name: 'Pixel 4',
      brand: 'Google',
      price: 799,
      description:
        'Motion Sense,2 an evolved camera, and the new Google Assistant3 make Pixel 4 our most helpful phone yet.',
      image:
        'https://lh3.googleusercontent.com/l8aixCpfC6jZx_f3RDBs740eBHvqcP8hr5ImuYSdDkZRIRFQbfbgZeHHYnfZ6p11EZRDrsQSuS2G3pvBhWvqiyg=rw-w1010',
      categoryId: electronics.id,
    },
    {
      name: 'The Cotton Crew Tee',
      brand: 'Everlane',
      price: 20,
      description: 'An iconic tee with clean lines and a classic crew neck.',
      image:
        'https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_auto,h_1200,q_85,w_1200/v1/i/34b295fd_5b53.jpg',
      categoryId: outfit.id,
    },
    {
      name: 'La Croix 8-pack',
      brand: 'La Croix',
      price: 4.22,
      description:
        'LaCroix Sparkling Water is a refreshing and healthy beverage that can be enjoyed in any setting.',
      image:
        'https://m.media-amazon.com/images/S/aplus-media/vc/9280c32f-9413-44df-bea2-15a1428cbffe._CR0,0,1000,1000_PT0_SX300__.png',
      categoryId: foodDrinks.id,
    },
    {
      name: 'Heavyweight Cashmere Hoodie',
      brand: 'Everlane',
      price: 160,
      description:
        'This relaxed hoodie is made from a thicker, 7-gauge cashmere yarn for extra-lofty warmth.',
      image:
        'https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_auto,h_1200,q_85,w_1200/v1/i/c8531c86_c5e3.jpg',
      categoryId: outfit.id,
    },
    {
      name: 'Doordash Gift Card',
      brand: 'Doordash',
      price: 25,
      description:
        'DoorDash Inc. is a San Francisco–based on-demand prepared food delivery service founded in 2013 by Stanford students Andy Fang, Stanley Tang, Tony Xu and Evan Moore.',
      image:
        'https://cdn.doordash.com/static/img/doordash-square-red.jpg?dd-nonce=1',
      categoryId: foodDrinks.id,
    },
    {
      name: 'Tesla Model S Rental (per hour)',
      brand: 'Tesla',
      price: 100,
      description:
        'Model S is designed for safety from the ground up and is the most exhilarating saloon on the road.',
      image:
        'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USC70TSC024B021001.jpg',
      categoryId: transportation.id,
    },
    {
      name: 'Uber Gift Card',
      brand: 'Uber',
      price: 50,
      description:
        'Uber Technologies, Inc. is an American multinational ridesharing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a bicycle-sharing system.',
      image:
        'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/b5/0a/80/b50a80b5-363d-fda8-19bd-be65bee5dda8/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/320x0w.jpg',
      categoryId: transportation.id,
    },
    {
      name: 'Ninebot ES4 Scooter',
      brand: 'Segway',
      price: 769,
      description: 'The ES4 is Ninebot by Segway’s premium model KickScooter.',
      image:
        'https://m.media-amazon.com/images/S/aplus-media/vc/50bf62b5-67ad-4d53-8040-96f101a2cb99.__CR0,0,970,300_PT0_SX970_V1___.jpg',
      categoryId: transportation.id,
    },
    {
      name: 'AirPods',
      brand: 'Apple',
      price: 159,
      description:
        'The new AirPods deliver the wireless headphone experience, reimagined. Just pull them out of the charging case and they’re ready to use with your iPhone, Apple Watch, iPad, or Mac.',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489688005',
      categoryId: electronics.id,
    },
    {
      name: 'Apple Watch',
      brand: 'Apple',
      price: 399,
      description:
        'With the new Always-On Retina display, you always see the time and your watch face.',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTP62_VW_PF+watch-40-alum-spacegray-nc-5s_VW_PF_WF_CO?wid=700&hei=700&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566449865297,1569365643157',
      categoryId: electronics.id,
    },
    {
      name: 'Uplift V2 Standing Desk',
      brand: 'Uplift',
      price: 539,
      description:
        'We created UPLIFT Desk by listening to you, and we focus every day on filling your office furniture needs as we add to our ever expanding product line.',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/71UjWkxwJjL._SX425_.jpg',
      categoryId: officeSupplies.id,
    },
    {
      name: 'Ping Pong Table',
      brand: 'STIGA',
      price: 399.99,
      description:
        'Competition-ready indoor table tennis table perfect for your home or office',
      image:
        'https://m.media-amazon.com/images/S/aplus-media/vc/cca29d02-8244-4626-8f0b-9fe7bcdd1531._CR0,0,2375,2375_PT0_SX300__.jpg',
      categoryId: officeSupplies.id,
    },
    {
      name: 'Luno Standard Ball Chair',
      brand: 'Vivora',
      price: 49.99,
      description:
        'Active Sitting Ball Chair Solution for use at home in the living room, in the office, in the classroom, or on the go',
      image: 'https://www.vivora.net/wp-content/uploads/2017/06/Anthracite.jpg',
      categoryId: officeSupplies.id,
    },
  ];

  await Promise.all(products.map((product) => Product.create(product)));
};

module.exports = syncAndSeed;
