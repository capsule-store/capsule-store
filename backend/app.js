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

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({error: err})
})


module.exports = app
