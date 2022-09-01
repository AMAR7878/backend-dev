const express = require('express');
const router = express.Router()
const Weather = require("../controllers/weatherController")




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//----------------------------------------------------------------- Weather Data -------------------------------------------------------------------

router.get("/weather/getWeather", Weather.getWeather)
router.get("/weather/getCity", Weather.getCity)




module.exports = router;