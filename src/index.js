const { Application } = require('interactions.js');
require('dotenv').config();

/* Initialize client */
const client = new Application({
  botToken: process.env.TOKEN,
  publicKey: process.env.PUBLICKEY,
  applicationId: process.env.APPLICATIONID,
});
const httpComponents = async () => {
  await require('./util/httpClient')(client);
};

httpComponents();
