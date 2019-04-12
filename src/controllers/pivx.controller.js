const BitcoinRPC = require('./bitcoinRPC.controller');

let Pivx = new BitcoinRPC(
  process.env.PIVX_URL,
  process.env.PIVX_PORT,
  process.env.PIVX_USER,
  process.env.PIVX_PASSWORD,
  'pivx',
);

module.exports = Pivx;
