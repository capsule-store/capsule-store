import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

/* Create New Product */

class _CreateProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: '',
      image: '',
      description: '',
      brandId: '',
      categoryId: '',
      error: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.setState({ error: '' });

    const {
      name, price, image, description, brandId, categoryId,
    } = this.state;
    const { createProduct } = this.props;

    if (
      name.length
      * price.length
      * description.length
      * brandId.length
      * categoryId.length
      === 0
    ) {
      this.setState({
        error: 'Please fill out all the information to create new product',
      });
      return;
    }

    const product = {
      name, price, image, description, brandId, categoryId,
    };

    createProduct(product)
      .catch((err) => {
        this.setState({ error: err.response.data.message });
      });
  }

  render() {
    const { error } = this.state;
    const { categories, brands } = this.props;

    return (
      <div className="form-group">
        <form id="product_form" onSubmit={this.handleSubmit}>
          <div>
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              onChange={(ev) => this.handleChange(ev)}
              placeholder="Enter Product Name"
              required
            />
          </div>
          <div>
            <label>Description</label>
            <input
              type="text"
              name="description"
              onChange={(ev) => this.handleChange(ev)}
              placeholder="Enter Description"
              required
            />
          </div>
          <div>
            <label>Price</label>
            <input
              type="number"
              name="price"
              onChange={(ev) => this.handleChange(ev)}
              placeholder="Enter Price"
              required
            />
          </div>
          <div>
            <label>Image URL</label>
            <input
              type="text"
              name="image"
              onChange={(ev) => this.handleChange(ev)}
              placeholder="Enter Image URL"
              required
            />
          </div>
          <div>
            <label>Select Brand</label>
            <select name="brandId" onChange={(ev) => this.handleChange(ev)}>
              <option>-----select Brand-----</option>
              {brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Select Category</label>
            <select name="categoryId" onChange={(ev) => this.handleChange(ev)}>
              <option>-----select Brand-----</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          {error}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ product, brands, categories }) => ({
  product,
  brands,
  categories,
});

const mapDispatchToProps = (dispatch, { history }) => ({
  createProduct: (product) => dispatch(actions.createProduct(product, history)),
});

const createProduct = connect(
  mapStateToProps,
  mapDispatchToProps,
)(_CreateProduct);

export default createProduct;
