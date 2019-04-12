const cmd = require('node-cmd');
const litecoin = require('litecoin');
const geth = require("geth");


// curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}' -H 'content-type:text/plain;' http://btcrpc:camelops_are_dead@138.197.104.133:8332/
// curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}' -H 'content-type:text/plain;' http://bchrpc:camelops_are_dead@45.55.45.20:8332/
// curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}' -H 'content-type:text/plain;' http://ltcrpc:camelops_are_dead@167.99.53.142:8332/
// curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}' -H 'content-type:text/plain;' http://pivxrpc:camelops_are_dead@159.65.177.227:51475/
// curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}' -H 'content-type:text/plain;' http://ioprpc:camelops_are_dead@45.55.32.89:8337/

cmd.get(
    `
    curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress"}' http://btcrpc:camelops_are_dead@138.197.104.133:8332/
    `,
    function(err, data, stderr){
        if (!err) {
           console.log('your => BTC TestNet wallet address is:',data)
        } else {
           console.log('error', err)
        }

    }
);

cmd.get(
    `
    curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress"}' http://bchrpc:camelops_are_dead@45.55.45.20:8332/
    `,
    function(err, data, stderr){
        if (!err) {
           console.log('your => BCH TestNet wallet address is:',data)
        } else {
           console.log('error', err)
        }

    }
);

cmd.get(
    `
    curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress"}' http://ltcrpc:camelops_are_dead@167.99.53.142:8332/
    `,
    function(err, data, stderr){
        if (!err) {
           console.log('your => LTC TestNet wallet address is:',data)
        } else {
           console.log('error', err)
        }

    }
);

cmd.get(
    `
    curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress"}' http://pivxrpc:camelops_are_dead@159.65.177.227:51475/
    `,
    function(err, data, stderr){
        if (!err) {
           console.log('your => PIVX TestNet wallet address is:',data)
        } else {
           console.log('error', err)
        }

    }
);

cmd.get(
    `
    curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress"}' http://ioprpc:camelops_are_dead@45.55.32.89:8337/
    `,
    function(err, data, stderr){
        if (!err) {
           console.log('your => IOP TestNet wallet address is:',data)
        } else {
           console.log('error', err)
        }

    }
);

// cmd.get(
//     `
//     curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}' -H 'content-type:text/plain;' http://btcrpc:camelops_are_dead@138.197.104.133:8332/
//     curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}' -H 'content-type:text/plain;' http://bchrpc:camelops_are_dead@45.55.45.20:8332/
//     curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}' -H 'content-type:text/plain;' http://ltcrpc:camelops_are_dead@167.99.53.142:8332/
//     curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}' -H 'content-type:text/plain;' http://pivxrpc:camelops_are_dead@159.65.177.227:51475/
//     curl --data-binary '{"jsonrpc":"1.0","id":"curltext","method":"getnewaddress","params":[]}' -H 'content-type:text/plain;' http://ioprpc:camelops_are_dead@45.55.32.89:8337/
//     `,
//     function(err, data, stderr){
//         if (!err) {
//            console.log('your Bitcoin TestNet wallet address is:',data)
//         } else {
//            console.log('error', err)
//         }
//
//     }
// );



    // cmd.get(
    //     `
    //     bitcoin-cli --testnet --host 138.197.104.133 --port 8332 --rpcuser btcrpc --rpcpassword camelops_are_dead getnewaddress
    //     bch-cli-wallet create-wallet -n -t
    //     bch-cli-wallet get-address -n -t
    //     `,
    //     function(err, data, stderr){
    //         if (!err) {
    //            console.log('your Bitcoin TestNet wallet address is:',data)
    //         } else {
    //            console.log('error', err)
    //         }
    //
    //     }
    // );

//     cmd.get(
//         `
//         geth --rinkeby account new
//         `,
//         function(err, data, stderr){
//             if (!err) {
//                console.log('your Ethereum TestNet wallet address is:',data)
//             } else {
//                console.log('error', err)
//             }
//
//         }
//     );
//
// const client = new litecoin.Client({
//   host: 'testnet',
//   port: 8332,
//   user: 'ltcrpc',
//   pass: 'camelops_are_dead',
// });

// rpcuser=ltcrpc
// rpcpassword=camelops_are_dead
// port=8332
// host=167.99.53.142
// testnet=1


    // cmd.get(
    //         'pwd',
    //         function(err, data, stderr){
    //             console.log('the current working dir is : ',data)
    //         }
    //     );

        // cmd.run('touch example.created.file');

        // cmd.get(
        //     'ls',
        //     function(err, data, stderr){
        //         console.log('the current dir contains these files :\n\n',data)
        //     }
        // );
        //


    // cmd.get(
    //     `
    //         git clone https://github.com/RIAEvangelist/node-cmd.git
    //
    //         cd node-cmd
    //
    //         ls
    //     `,
    //     function(err, data, stderr){
    //         if (!err) {
    //            console.log('the node-cmd cloned dir contains these files :\n\n',data)
    //         } else {
    //            console.log('error', err)
    //         }
    //
    //     }
    // );
