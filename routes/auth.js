const express = require("express");
const signin = require("../controllers/auth");
const route = express.Router();

route.post("/" , signin);

module.exports = route;