# VC Starter Pack
Flex 1907 Grace Shopper project

## API Endpoints
Endpoints we should make available. Not all are ready yet

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

`GET` a user's cart, separated for convenience. On the backend, this is probably going to be very similar to the endpoint above, but with a `where` clause to find the incomplete order
```
GET /api/users/:id/cart
```

`GET` a user's specific order
```
GET /api/users/:id/orders/:orderId
```

