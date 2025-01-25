const express = require("express");
const {getNews,fetchWeather} = require("../Controllers/apiController");

const router = express.Router();

router.get("/news", getNews);
router.get("/weather/", fetchWeather);

module.exports = router