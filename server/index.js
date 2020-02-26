require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
app.use(express.json());

const ctrl = require("./controller");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    rejectUnauthorized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7},
    secret: SESSION_SECRET
  })
);


app.post(`/api/login`, ctrl.login)
app.post(`/api/register` , ctrl.register)
app.post('/api/logout', ctrl.logout)
app.get(`/api/posts/:id`, ctrl.showAllPosts)








massive({
    connectionString: CONNECTION_STRING,
    ssl: {
      rejectUnauthorized: false
    }
  }).then(db => {
    app.set("db", db);
    app.listen(SERVER_PORT || 4055, () =>
      console.log(`-----Server running on ${SERVER_PORT}-------`)
    );
    console.log("ALL connected");
  });