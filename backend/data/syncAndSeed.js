const connection = require('./connection');
const {
  Brand,
  Category,
  Product,
  User,
  Order,
  LineItem,
} = require('./models/');

const syncAndSeed = async () => {
  await connection.sync({ force: true });

  const categoryNames = [
    'Essentials',
    'Outfit',
    'Accessories',
    'Transportation',
    'Food & Drinks',
    'Office Supplies',
    'Electronics',
  ];

  const [
    essentials,
    outfit,
    accessories,
    transportation,
    foodDrinks,
    officeSupplies,
    electronics,
  ] = await Promise.all(categoryNames.map((name) => Category.create({ name })));

  const [
    allbirds,
    apple,
    boosted,
    doordash,
    everlane,
    google,
    moleskine,
    rains,
    soylent,
    uber,
    uplift,
    vivora,
    stiga,
    tesla,
  ] = await Promise.all(
    [
      {
        name: 'Allbirds',
        image:
          'https://user-images.githubusercontent.com/4413445/67622310-5a89d800-f7e7-11e9-9ef3-7ae6c583c269.png',
        description:
          'Allbirds is an American company which uses a direct-to-consumer approach and is aimed at designing environmentally friendly footwear.',
      },
      {
        name: 'Apple',
        image: 'https://user-images.githubusercontent.com/4413445/67622311-5a89d800-f7e7-11e9-80c3-ad65748b45b6.png',
        description:
          'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services.',
      },
      {
        name: 'Boosted',
        image:
          'https://user-images.githubusercontent.com/4413445/67622312-5a89d800-f7e7-11e9-938d-0f80444e3e6a.png',
        description:
          'Boosted is an American manufacturer of electric skateboards and electric scooters based in Mountain View, California.',
      },
      {
        name: 'Doordash',
        image:
          'https://user-images.githubusercontent.com/4413445/67622313-5a89d800-f7e7-11e9-81df-62f6e77b3add.png',
        description:
          'DoorDash Inc. is a San Francisco–based on-demand prepared food delivery service founded in 2013 by Stanford students Andy Fang, Stanley Tang, Tony Xu and Evan Moore.',
      },
      {
        name: 'Everlane',
        image:
          'https://user-images.githubusercontent.com/4413445/67622314-5a89d800-f7e7-11e9-9162-4b9190978f70.png',
        description:
          'Everlane is an American clothing retailer that sells primarily online. ',
      },
      {
        name: 'Google',
        image:
          'https://user-images.githubusercontent.com/4413445/67622315-5a89d800-f7e7-11e9-8794-5f6249be74a1.png',
        description:
          'Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware.',
      },

      {
        name: 'Moleskine',
        image:
          'https://user-images.githubusercontent.com/4413445/67622316-5a89d800-f7e7-11e9-81e3-0e8fc3d9670e.png',
        description:
          'Moleskine is an Italian manufacturer, papermaker and product designer founded in 1997 by Francesco Franceschi, based in Milan, Italy.',
      },
      {
        name: 'Rains',
        image:
          'https://user-images.githubusercontent.com/4413445/67622317-5a89d800-f7e7-11e9-89f5-75faea33bc65.png',
        description:
          'Rains is a contemporary rainwear lifestyle brand creating waterproof designs for the global citizen. ',
      },
      {
        name: 'Soylent',
        image:
          'https://user-images.githubusercontent.com/4413445/67622318-5a89d800-f7e7-11e9-8ee7-b2ed180ef614.png',
        description:
          'Soylent is a brand of meal replacement products made by Rosa Foods.',
      },
      {
        name: 'Uber',
        image:
          'https://user-images.githubusercontent.com/4413445/67622321-5b226e80-f7e7-11e9-9b19-d711b17ee192.png',
        description:
          'Uber Technologies, Inc. is an American multinational ridesharing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a bicycle-sharing system.',
      },
      {
        name: 'Uplift Desk',
        image:
          'https://i.pinimg.com/280x280_RS/d5/a5/80/d5a580e765b153aea29906a8594b6fa4.jpg',
        description:
          'At UPLIFT Desk, we\'ve been purveyors of comfortable, healthy work, otherwise known as "ergonomics", since 2002.',
      },
      {
        name: 'Vivora',
        image:
          'https://user-images.githubusercontent.com/4413445/67622322-5b226e80-f7e7-11e9-885b-68f09c091211.png',
        description:
          'Our products are here to bring you simple, stylish, and active furniture that helps you stay healthy, concentrated, and fashionable.',
      },
      {
        name: 'Stiga',
        image:
          'https://user-images.githubusercontent.com/4413445/67622319-5b226e80-f7e7-11e9-9e83-11ba34cca5de.png',
        description:
          'STIGA Sports AB, a global company with partners in over 100 countries, has been a world leader in the sport of table tennis for over 60 years. ',
      },
      {
        name: 'Tesla',
        image:
          'https://user-images.githubusercontent.com/4413445/67622320-5b226e80-f7e7-11e9-9746-b378084d2689.png',
        description:
          "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar panels and integrated renewable energy solutions for homes.",
      },
    ].map((brand) => Brand.create(brand)),
  );

  const [
    woolRunners,
    backpack,
    boostedPlus,
    soylentMint,
    notebook,
    pixel4,
    crewTee,
    hoodie,
    doordashCard,
    modelS,
    uberCard,
    boostedRev,
    airPods,
    appleWatch,
    upliftDesk,
    pingPongTable,
    ballChair,
  ] = await Promise.all(
    [
      {
        name: "Men's Wool Runners",
        price: 95,
        description:
          "A remarkable shoe that's naturally soft, cozy all over, and fits your every move.",
        image:
          'https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_1000,f_auto,q_auto,b_rgb:F2F2F2/https://cdn.shopify.com/s/files/1/1104/4168/products/Men_s_Wool_Runners_-_Natural_Black__Black_Sole__-_imageAngle.png?v=1557940737',
        brandId: allbirds.id,
        categoryId: outfit.id,
      },
      {
        name: 'Backpack',
        price: 110,
        description:
          'Backpack is a modern rucksack with a strong Rains identity.',
        image:
          'https://cdn.shopify.com/s/files/1/2418/1767/products/Backpack-Bags-1220-01_Black-37_1400x1400.jpg?v=1571158394',
        brandId: rains.id,
        categoryId: accessories.id,
      },
      {
        name: 'Boosted Plus',
        price: 1399,
        description: 'The new classic',
        image:
          'https://images.ctfassets.net/axbo81ontyws/5SD88gO76goCgKAOi4eOg6/aaaf9e80ecfaa9f1f45d68a6349bb803/boosted-board-plus-1-1.jpg',
        brandId: boosted.id,
        categoryId: transportation.id,
      },
      {
        name: 'Soylent Mint Chocolate',
        price: 37.5,
        description:
          'Minty chocolate deliciousness. Twist the cap and dive into our brand new flavor.',
        image:
          'https://cdn.shopify.com/s/files/1/0003/5933/3902/products/091519_soylent_Drinks_Hero_1468x1100_A01-MINTCHOCOLATE_1400x1400.jpg?v=1569964156',
        brandId: soylent.id,
        categoryId: foodDrinks.id,
      },
      {
        name: 'Classic Notebook',
        price: 4.95,
        description:
          'The Classic Notebook can trace its origins back to the iconic legendary notebook used by artists, writers and thinkers over the past 2 centuries.',
        image:
          'https://us.moleskine.com/ccstore/v1/images/?source=/file/v4160360617349567681/products/gtin_9788883707247_01_1500x1500.jpg&height=500&width=500',
        brandId: moleskine.id,
        categoryId: officeSupplies.id,
      },
      {
        name: 'Pixel 4',
        price: 799,
        description:
          'Motion Sense,2 an evolved camera, and the new Google Assistant3 make Pixel 4 our most helpful phone yet.',
        image:
          'https://lh3.googleusercontent.com/l8aixCpfC6jZx_f3RDBs740eBHvqcP8hr5ImuYSdDkZRIRFQbfbgZeHHYnfZ6p11EZRDrsQSuS2G3pvBhWvqiyg=rw-w1010',
        brandId: google.id,
        categoryId: electronics.id,
      },
      {
        name: 'The Cotton Crew Tee',
        price: 20,
        description: 'An iconic tee with clean lines and a classic crew neck.',
        image:
          'https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_auto,h_1200,q_85,w_1200/v1/i/34b295fd_5b53.jpg',
        brandId: everlane.id,
        categoryId: outfit.id,
      },
      {
        name: 'Heavyweight Cashmere Hoodie',
        price: 160,
        description:
          'This relaxed hoodie is made from a thicker, 7-gauge cashmere yarn for extra-lofty warmth.',
        image:
          'https://res.cloudinary.com/everlane/image/upload/c_fill,dpr_1.0,f_auto,h_1200,q_85,w_1200/v1/i/c8531c86_c5e3.jpg',
        brandId: everlane.id,
        categoryId: outfit.id,
      },
      {
        name: 'Doordash Gift Card',
        price: 25,
        description:
          'DoorDash Inc. is a San Francisco–based on-demand prepared food delivery service founded in 2013 by Stanford students Andy Fang, Stanley Tang, Tony Xu and Evan Moore.',
        image:
          'https://cdn.doordash.com/static/img/doordash-square-red.jpg?dd-nonce=1',
        brandId: doordash.id,
        categoryId: foodDrinks.id,
      },
      {
        name: 'Tesla Model S Rental (per hour)',
        price: 100,
        description:
          'Model S is designed for safety from the ground up and is the most exhilarating saloon on the road.',
        image:
          'https://s.aolcdn.com/dims-global/dims3/GLOB/legacy_thumbnail/640x400/quality/80/https://s.aolcdn.com/commerce/autodata/images/USC70TSC024B021001.jpg',
        brandId: tesla.id,
        categoryId: transportation.id,
      },
      {
        name: 'Uber Gift Card',
        price: 50,
        description:
          'Uber Technologies, Inc. is an American multinational ridesharing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a bicycle-sharing system.',
        image:
          'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/b5/0a/80/b50a80b5-363d-fda8-19bd-be65bee5dda8/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-7.png/320x0w.jpg',
        brandId: uber.id,
        categoryId: transportation.id,
      },
      {
        name: 'Boosted Rev',
        price: 1599,
        description: 'Your vehicle-grade scooter is here',
        image:
          'https://images.ctfassets.net/axbo81ontyws/g1fEUO0KLsAqeOhRneITi/fc09403921f57142f70cccdf395508b6/boosted-rev-3-4-turn.jpg',
        brandId: boosted.id,
        categoryId: transportation.id,
      },
      {
        name: 'AirPods',
        price: 159,
        description:
          'The new AirPods deliver the wireless headphone experience, reimagined. Just pull them out of the charging case and they’re ready to use with your iPhone, Apple Watch, iPad, or Mac.',
        image:
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=572&hei=572&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551489688005',
        brandId: apple.id,
        categoryId: electronics.id,
      },
      {
        name: 'Apple Watch',
        price: 399,
        description:
          'With the new Always-On Retina display, you always see the time and your watch face.',
        image:
          'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTP62_VW_PF+watch-40-alum-spacegray-nc-5s_VW_PF_WF_CO?wid=700&hei=700&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566449865297,1569365643157',
        brandId: apple.id,
        categoryId: electronics.id,
      },
      {
        name: 'Uplift V2 Standing Desk',
        price: 539,
        description:
          'We created UPLIFT Desk by listening to you, and we focus every day on filling your office furniture needs as we add to our ever expanding product line.',
        image:
          'https://images-na.ssl-images-amazon.com/images/I/71UjWkxwJjL._SX425_.jpg',
        brandId: uplift.id,
        categoryId: officeSupplies.id,
      },
      {
        name: 'Ping Pong Table',
        price: 399.99,
        description:
          'Competition-ready indoor table tennis table perfect for your home or office',
        image:
          'https://m.media-amazon.com/images/S/aplus-media/vc/cca29d02-8244-4626-8f0b-9fe7bcdd1531._CR0,0,2375,2375_PT0_SX300__.jpg',
        brandId: stiga.id,
        categoryId: officeSupplies.id,
      },
      {
        name: 'Luno Standard Ball Chair',
        price: 49.99,
        description:
          'Active Sitting Ball Chair Solution for use at home in the living room, in the office, in the classroom, or on the go',
        image:
          'https://www.vivora.net/wp-content/uploads/2017/06/Anthracite.jpg',
        brandId: vivora.id,
        categoryId: officeSupplies.id,
      },
    ].map((product) => Product.create(product)),
  );

  const users = await Promise.all(
    [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'jdoe@gmail.com',
        password: 'jd123pwd',
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'js@gmail.com',
        password: 'password',
      },
      {
        firstName: 'Prof',
        lastName: 'Katz',
        email: 'ekatz@gmail.com',
        password: 'breadAndButter',
        isAdmin: true,
      },
    ].map((user) => User.create(user)),
  );

  const [johnsOrder, janesOrder, profsOrder] = await Promise.all(
    users.map((user) => Order.create({ userId: user.id })),
  );

  // Add items to John's order
  await Promise.all(
    [
      { productId: modelS.id, quantity: 1 },
      { productId: soylentMint.id, quantity: 3 },
      { productId: airPods.id, quantity: 1 },
      { productId: boostedPlus.id, quantity: 1 },
      { productId: backpack.id, quantity: 1 },
      { productId: uberCard.id, quantity: 6 },
    ].map((item) => LineItem.create({ ...item, orderId: johnsOrder.id })),
  );

  // Add items to Jane's order
  await Promise.all(
    [
      { productId: upliftDesk.id, quantity: 1 },
      { productId: appleWatch.id, quantity: 1 },
      { productId: pixel4.id, quantity: 1 },
      { productId: crewTee.id, quantity: 1 },
      { productId: notebook.id, quantity: 5 },
      { productId: woolRunners.id, quantity: 2 },
    ].map((item) => LineItem.create({ ...item, orderId: janesOrder.id })),
  );

  // Add items to Prof's order
  await Promise.all(
    [
      { productId: upliftDesk.id, quantity: 1 },
      { productId: hoodie.id, quantity: 2 },
      { productId: doordashCard.id, quantity: 3 },
      { productId: boostedRev.id, quantity: 1 },
      { productId: pingPongTable.id, quantity: 1 },
      { productId: ballChair.id, quantity: 1 },
    ].map((item) => LineItem.create({ ...item, orderId: profsOrder.id })),
  );
};

module.exports = syncAndSeed;
