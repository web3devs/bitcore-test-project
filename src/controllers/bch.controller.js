const BitcoinRPC = require('./bitcoinRPC.controller');

let Bch = new BitcoinRPC(
  process.env.BCH_URL,
  process.env.BCH_PORT,
  process.env.BCH_USER,
  process.env.BCH_PASSWORD,
  'bch',
);

module.exports = Bch;
