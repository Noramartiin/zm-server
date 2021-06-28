const { Schema, model } = require("mongoose");

const rateSchema = new Schema({
  volume_1h: {
    type: Number,
    required: true,
  },
  volume_1h_buy: {
    type: Number,
    required: true,
  },
  volume_1h_sell: {
    type: Number,
    required: true,
  },
  volume_24h: {
    type: Number,
    required: true,
  },
  volume_24h_buy: {
    type: Number,
    required: true,
  },
  volume_24h_sell: {
    type: Number,
    required: true,
  },
  ask: {
    type: Number,
    required: true,
  },
  bid: {
    type: Number,
    required: true,
  },
  daily_change: {
    type: Number,
    required: true,
  },
  daily_change_percent: {
    type: Number,
    required: true,
  },
  global_units: {
    type: Number,
    required: true,
  },
  global_volume: {
    type: Number,
    required: true,
  },
  last_price: {
    type: Number,
    required: true,
  },
  last_transaction_type: {
    type: String,
    required: true,
  },
  market_cap: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  open: {
    type: Number,
    required: true,
  },
  timestampApis: {
    type: Date,
    required: true,
  },
});

const Rate = model("Rate", rateSchema);

module.exports = Rate;
