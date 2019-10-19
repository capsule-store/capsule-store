const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());

/* dist folder not generated. why?
app.use("/dist", express.static(path.join(__dirname, "dist")));*/

const authGoogleSubRouter = require('./routes/auth-google');

app.use('auth/google', authGoogleSubRouter);

app.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
  });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500).send({error: err})
// })

app.use((req, res, next) => {
  const auth = req.headers.authorization;

  if (!auth) {
    return next();
  }

  const { id } = jwt.decode(auth, process.env.SECRET);

  User.findByPk(id)
    .then(user => {
      req.user = user.dataValues;
      next();
    })
    .catch(next);
});

app.post("/api/sessions", async (req, res, next) => {
  const { email, password } = req.body;

  User.findOne(
    { raw: true },
    {
      where: {
        email,
        password
      }
    }
  )
    .then(user => {
      if (!user) {
        throw { status: 401 };
      }
      const token = jwt.encode({ id: user.id }, process.env.SECRET);
      return res.send({ token });
    })
    .catch(err => next(err));
});

app.get("/api/sessions", (req, res, next) => {
  if (req.user) {
    return res.send(req.user);
  }
  next({ status: 401 });
});

app.post("/signup", async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } })
    .dataValues;

  if (!user) {
    const salt = await bcrypt.genSalt(process.env.SALT_ROUNDS);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    
    req.body.password = hashedPassword

    User.create(req.body)
      .then(user => res.status(201).send(user))
      .catch(next);
  }
  

});


module.exports = app
