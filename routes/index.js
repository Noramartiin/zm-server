const router = require("express").Router();
const Rate = require("../models/Rate.model");
const axios = require("axios");

/* GET home page */
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//GET all the saved information
router.get("/wholeInfo", (req, res) => {
  Rate.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});

//POST new information
router.post("/getInfo", (req, res) => {
  const {
    volume_1h,
    volume_1h_buy,
    volume_1h_sell,
    volume_24h,
    volume_24h_buy,
    volume_24h_sell,
    ask,
    bid,
    daily_change,
    daily_change_percent,
    global_units,
    global_volume,
    last_price,
    last_transaction_type,
    market_cap,
    max,
    min,
    open: open,
    timestampApis,
  } = req.body;
  
  Rate.create({
    volume_1h,
    volume_1h_buy,
    volume_1h_sell,
    volume_24h,
    volume_24h_buy,
    volume_24h_sell,
    ask,
    bid,
    daily_change,
    daily_change_percent,
    global_units,
    global_volume,
    last_price,
    last_transaction_type,
    market_cap,
    max,
    min,
    open,
    timestampApis,
  })
    .then((response) => {
      console.log("Auroracoin Info posted");
      res.status(200).json(response);
    })
    .catch((error) => {
      res.status(500).json({
        error: "Something went wrong",
        message: err,
      });
    });
});


module.exports = router;
