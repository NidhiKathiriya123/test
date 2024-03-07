
const user = require("./userRoute");
const orderRoute = require("./orderRoute");


const express = require("express");
const router = express.Router();

const defaultRoutes = [
  {
    path: "/user",
    route: user,
  },
  {
    path: "/order",
    route: orderRoute,
  },
  

];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
