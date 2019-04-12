const BitcoinRPC = require('./bitcoinRPC.controller');

let IoP = new BitcoinRPC(
  process.env.IOP_URL,
  process.env.IOP_PORT,
  process.env.IOP_USER,
  process.env.IOP_PASSWORD,
  'iop',
);

module.exports = IoP;
