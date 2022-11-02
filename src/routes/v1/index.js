const express = require('express');
const eventRoute = require('./event.route');
const categoryRoute = require('./category.route');
const router = express.Router();

const defaultRoutes = [
  {
    path: '/event',
    route: eventRoute,
  },
  {
    path: '/category',
    route: categoryRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
