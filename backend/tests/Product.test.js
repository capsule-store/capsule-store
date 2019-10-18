const { expect } = require('chai');

const { Product } = require('../data/models');

describe("Product model", () => {
  describe("Added product has all fields", () => {
    const name = "Test product"
    const brand = "Test brand"
    const price = 30
    const image = "http://google.com"
    const description = "Lorem ipsum description"

    const product = await Product.create({
      name,
      brand,
      price,
      image,
      description
    })

    expect(product.name).to.equal(name)
    expect(product.brand).to.equal(brand)
    expect(product.price).to.equal(price)
    expect(product.image).to.equal(image)
    expect(product.description).to.equal(description)
  })
})
