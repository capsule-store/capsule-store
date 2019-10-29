const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv').config();
const path = require('path');
const jwt = require('jwt-simple');
const bcrypt = require('bcrypt');
const db = require('./data');

// Routes
const authGoogleSubRouter = require('./routes/auth-google');
const brandsSubRouter = require('./routes/brands');
const categoriesSubRouter = require('./routes/categories');
const productsSubRouter = require('./routes/products');
const usersSubRouter = require('./routes/users');
const cartSubRouter = require('./routes/cart');

const app = express();

const { User } = db.models;

app.use('/assets', express.static(path.join(__dirname, '../frontend/assets')));

app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 }, // 10 mins
    cart: {},
  }),
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.use((req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return next();
  }

  const { id } = jwt.decode(auth, process.env.SECRET);
  User.findByPk(id)
    .then((user) => {
      if (user) {
        req.user = user.dataValues;
      }
      next();
    })
    .catch(next);
});

app.post('/api/sessions', (req, res, next) => {
  const { email, password } = req.body;

  User.findOne({
    where: {
      email,
    },
  })
    .then(async (user) => {
      if (!user) {
        throw {
          status: 401,
          message: 'Email or Password is incorrect',
        };
      } else if (!(await user.validPassword(password))) {
        throw {
          status: 401,
          message: 'Password is incorrect',
        };
      }
      const { isAdmin } = user;
      const token = jwt.encode({ id: user.id }, process.env.SECRET);
      return res.send({ token, isAdmin });
    })
    .catch((err) => next(err));
});

app.get('/api/sessions', (req, res, next) => {
  if (req.user) {
    return res.send(req.user);
  }
  next({ status: 401, message: 'Not logged in' });
});

app.post('/signup', async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } })
    .dataValues;

  if (!user) {
    User.create(req.body)
      .then((createdUser) => {
        res.status(201).send(createdUser.dataValues);
      })
      .catch(next);
  }
});

const routes = {
  Brand: 'brands',
  Category: 'categories',
  LineItem: 'lineitems',
  Order: 'orders',
  Product: 'products',
  User: 'users',
};

// Basic routes are auto-generated here
// For the rest, use subrouters
Object.keys(routes).forEach((key) => {
  app.get(`/api/${routes[key]}`, (req, res, next) => {
    db.models[key]
      .findAll()
      .then((items) => res.send(items))
      .catch(next);
  });
});

app.use('/auth/google', authGoogleSubRouter);
app.use('/api/brands', brandsSubRouter);
app.use('/api/categories', categoriesSubRouter);
app.use('/api/products', productsSubRouter);
app.use('/api/users', usersSubRouter);
app.use('/api/cart', cartSubRouter);

app.use((err, req, res, next) => {
  let message = "Something's not right";
  if (err.errors) {
    message = err.errors[0].message;
  } else if (err.message) {
    message = err.message;
  }

  if (err) {
    res.status(err.status || 500).send({ message });
  }
});

module.exports = app;
