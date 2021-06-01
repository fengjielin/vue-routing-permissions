const express = require('express');
const app = express();

const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OP0TIONS");
  res.header("X-Powered-By", "3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


let data = require('./data.json')

let users = require('./data/user')
let routers = require('./data/router')

app.post('/user_router_auth', (req, res, next) => {
  const { uid } = req.body;

  if (uid) {
    let authRouterInfo = [];

    const userInfo = users.filter((user) => user.id == uid)[0];
    console.log(userInfo);

    userInfo.auth.map((rid) => {
      routers.map((router) => {
        if (router.id === rid) {
          authRouterInfo.push(router);
        }
      })
    })

    res.body = authRouterInfo;
    // res.status(200);
    res.json(authRouterInfo);
  } else {
    next();
  }
})

app.listen(3000, (req, res) => {
  console.log('express app is running...');
})