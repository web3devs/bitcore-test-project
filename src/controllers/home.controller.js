// const mongoose = require ( 'mongoose' );

//Simple version, without validation or sanitation
exports.home = function ( req, res ) {
    res.send ( 'Welcome to the BlockChain Page!' );
};
