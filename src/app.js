require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let port = 3000;
if(process.env.SERVER_PORT != undefined) {
  port = process.env.SERVER_PORT
}

const corsOptionsAll = {
  allowedHeaders: [
    'content-type',
    'authorization',
    'content-length',
    'x-requested-with',
    'accept',
    'origin',
    'connection',
    'upgrade',
  ],
  credentials: false,
  methods: ['GET', 'PUT', 'POST', 'CONNECT', 'OPTIONS'],
  origin: '*',
};

// Imports routes
const home = require('./routes/home.route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (undefined === process.env.API_BASE) {
  console.log(
    '[ERROR] Missing API_BASE - you probably have outdated .env file. Check .env.dist and compare!',
  );
}

app.use(cors('/wallet'));
app.use('/', home);

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
