const express = require('express');
const router = express.Router();

// Require the controllers
const home_controller = require('../controllers/home.controller');
const Btc = require('../controllers/btc.controller');
const Bch = require('../controllers/bch.controller');
const Ltc = require('../controllers/ltc.controller');
const Pivx = require('../controllers/pivx.controller');
const Iop = require('../controllers/iop.controller');

// url routes for the currency's
router.post('/btc/get-new-address', Btc.getNewBtc);
router.post('/bch/get-new-address', Bch.getNewBch);
router.post('/iop/get-new-address', Iop.getNewIop);
router.post('/ltc/get-new-address', Ltc.getNewLtc);
router.post('/pivx/get-new-address', Pivx.getNewPivx);
router.post('/btc/get-received-by-address', Btc.getReceivedByBtc);
router.post('/bch/get-received-by-address', Bch.getReceivedByBch);
router.post('/iop/get-received-by-address', Bch.getReceivedByIop);
router.post('/pivx/get-received-by-address', Bch.getReceivedByPivx);
router.post('/ltc/get-received-by-address', Bch.getReceivedByLtc);

router.get('/', home_controller.home);
router.get('/test', (req, res) => res.send('Hello World!'));

module.exports = router;
