const { expect } = require('chai');

const connection = require('../data/connection');
const syncAndSeed = require('../data/syncAndSeed');
const { Product } = require('../data/models');

describe('Product model', () => {
  let seed;
  beforeEach(async () => {
    seed = await syncAndSeed();
  });

  it('Added product has all fields', async () => {
    const name = 'Test product';
    const brand = 'Test brand';
    const price = 30;
    const image = 'http://google.com';
    const description = 'Lorem ipsum description';

    const product = await Product.create({
      name,
      brand,
      price,
      image,
      description,
    });

    expect(product.name).to.equal(name);
    expect(product.brand).to.equal(brand);
    expect(product.price).to.equal(price.toString());
    expect(product.image).to.equal(image);
    expect(product.description).to.equal(description);
  });

  it('has Products after syncAndSeed', () => {
    expect(seed.createdProducts.length).to.equal(18);
  });
});
