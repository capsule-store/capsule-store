# Capsule
Capsule is an e-commerce store that sells Silicon Valley-related products. This project was completed as part of the [Fullstack Academy](https://www.fullstackacademy.com/) Flex 1907 Grace Shopper project.

The website is deployed on heroku and can be accessed through [this link](https://capsule-store.herokuapp.com/#/).

## Contributing
After cloning, run `npm ci` to install all dependencies. `.env` file is not included in the repo.

### Database
Create a `psql` database called `sv_starter_pack_db`.

### Scripts
To start a development server (nodemon will watch backend, webpack will watch frontend)
```
npm run start:dev
```

To run tests (mocha will watch files)
```
npm run test:watch
```

To bundle (webpack will watch files)
```
npm run webpack
```

## API Endpoints
Available endpoints.

#### Brands
`GET` all brands
```
GET /api/brands
```

`GET` a specific brand
```
GET /api/brands/:id
```

`GET` all products of a specific brand
```
GET /api/brands/:id/products
```

#### Categories
Similar pattern to `/api/brands` above
```
GET /api/categories
GET /api/categories/:id
GET /api/categories/:id/products
```

#### Products
Similar pattern to `/api/brands` above
```
GET /api/products
GET /api/products/:id
```

#### Users
Similar pattern to `/api/brands` above. These should probably be protected somehow. Maybe only an admin can see users and a user can only look at their own orders
```
GET /api/users
GET /api/users/:id
```

`GET` a user's orders
```
GET /api/users/:id/orders
```

`GET` all line items of a user's specific order
```
GET /api/users/:id/orders/:orderId
```

#### Cart
`GET` all line items of a user's cart. A cart is an active order. User ID is passed as a header:`token` from `localStorage`.
```
GET /api/cart
```

`POST`
```
POST /api/cart
```

`PUT` line item (`id`). Quantity is passed in as `req.body`
```
PUT /api/cart/:id
```

`DELETE` line item (`id`)
```
DELETE /api/cart/:id
```
