const Client = require('bitcoin-core');
const cmd = require('node-cmd');

class BitcoinRPC {
  constructor(url, port, user, password, currency) {
    this.url = url;
    this.port = port;
    this.user = user;
    this.password = password;
    this.currency = currency;

    this.client = new Client({
      username: user,
      password: password,
      host: url,
      port: port
    });
  }

  getNewBtc(req, res) {
    const execSync = require('child_process').execSync;
    const code = execSync('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress"}\' http://'+process.env.BTC_USER+':'+process.env.BTC_PASSWORD+'@'+process.env.BTC_URL+':'+process.env.BTC_PORT+'');
    res.send (code);
  };

  getNewBch(req, res) {
    const execSync = require('child_process').execSync;
    const code = execSync('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress"}\' http://'+process.env.BCH_USER+':'+process.env.BCH_PASSWORD+'@'+process.env.BCH_URL+':'+process.env.BCH_PORT+'');
    res.send (code);
  };

  getNewIop(req, res) {
    const execSync = require('child_process').execSync;
    const code = execSync('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress"}\' http://'+process.env.IOP_USER+':'+process.env.IOP_PASSWORD+'@'+process.env.IOP_URL+':'+process.env.IOP_PORT+'');
    res.send (code);
  };

  getNewLtc(req, res) {
    const execSync = require('child_process').execSync;
    const code = execSync('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress"}\' http://'+process.env.LTC_USER+':'+process.env.LTC_PASSWORD+'@'+process.env.LTC_URL+':'+process.env.LTC_PORT+'');
    res.send (code);
  };

  getNewPivx(req, res) {
    const execSync = require('child_process').execSync;
    const code = execSync('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress"}\' http://'+process.env.PIVX_USER+':'+process.env.PIVX_PASSWORD+'@'+process.env.PIVX_URL+':'+process.env.PIVX_PORT+'');
    res.send (code);
  };

  getReceivedByBtc(req, res) {
      const execSync = require('child_process').execSync;
      // console.log('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getreceivedbyaddress","params":["'+req.body.address+'"]}\' http://'+process.env.BTC_USER+':'+process.env.BTC_PASSWORD+'@'+process.env.BTC_URL+':'+process.env.BTC_PORT+'');
      const code = execSync('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getreceivedbyaddress","params":["'+req.body.address+'"]}\' http://'+process.env.BTC_USER+':'+process.env.BTC_PASSWORD+'@'+process.env.BTC_URL+':'+process.env.BTC_PORT+'');
      res.send (code);
    };

  getReceivedByBch(req, res) {
      const execSync = require('child_process').execSync;
      // console.log('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getreceivedbyaddress","params":["'+req.body.address+'"]}\' http://'+process.env.BTC_USER+':'+process.env.BTC_PASSWORD+'@'+process.env.BTC_URL+':'+process.env.BTC_PORT+'');
      const code = execSync('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getreceivedbyaddress","params":["'+req.body.address+'"]}\' http://'+process.env.BCH_USER+':'+process.env.BCH_PASSWORD+'@'+process.env.BCH_URL+':'+process.env.BCH_PORT+'');
      res.send (code);
    };

  getReceivedByIop(req, res) {
      const execSync = require('child_process').execSync;
      // console.log('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getreceivedbyaddress","params":["'+req.body.address+'"]}\' http://'+process.env.BTC_USER+':'+process.env.BTC_PASSWORD+'@'+process.env.BTC_URL+':'+process.env.BTC_PORT+'');
      const code = execSync('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getreceivedbyaddress","params":["'+req.body.address+'"]}\' http://'+process.env.IOP_USER+':'+process.env.IOP_PASSWORD+'@'+process.env.IOP_URL+':'+process.env.IOP_PORT+'');
      res.send (code);
    };

  getReceivedByPivx(req, res) {
      const execSync = require('child_process').execSync;
      // console.log('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getreceivedbyaddress","params":["'+req.body.address+'"]}\' http://'+process.env.BTC_USER+':'+process.env.BTC_PASSWORD+'@'+process.env.BTC_URL+':'+process.env.BTC_PORT+'');
      const code = execSync('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getreceivedbyaddress","params":["'+req.body.address+'"]}\' http://'+process.env.PIVX_USER+':'+process.env.PIVX_PASSWORD+'@'+process.env.PIVX_URL+':'+process.env.PIVX_PORT+'');
      res.send (code);
    };

  getReceivedByLtc(req, res) {
      const execSync = require('child_process').execSync;
      // console.log('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getreceivedbyaddress","params":["'+req.body.address+'"]}\' http://'+process.env.BTC_USER+':'+process.env.BTC_PASSWORD+'@'+process.env.BTC_URL+':'+process.env.BTC_PORT+'');
      const code = execSync('curl --data-binary \'{"jsonrpc":"1.0","id":"curltext","method":"getreceivedbyaddress","params":["'+req.body.address+'"]}\' http://'+process.env.LTC_USER+':'+process.env.LTC_PASSWORD+'@'+process.env.LTC_URL+':'+process.env.LTC_PORT+'');
      res.send (code);
    };

}
module.exports = BitcoinRPC;
