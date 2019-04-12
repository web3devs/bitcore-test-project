const BitcoinRPC = require('./bitcoinRPC.controller');

let Btc = new BitcoinRPC(
  process.env.BTC_URL,
  process.env.BTC_PORT,
  process.env.BTC_USER,
  process.env.BTC_PASSWORD,
  'btc',
);

module.exports = Btc;
