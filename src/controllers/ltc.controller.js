const BitcoinRPC = require('./bitcoinRPC.controller');

let Ltc = new BitcoinRPC(
  process.env.LTC_URL,
  process.env.LTC_PORT,
  process.env.LTC_USER,
  process.env.LTC_PASSWORD,
  'ltc',
);

module.exports = Ltc;
