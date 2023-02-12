const mongoose = require('mongoose');
const constants = require('./constants');

function database() {
  console.log('connecting to Mongodb...')
  mongoose
  .set('strictQuery', true)
  .connect(constants.DATABASE_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnfiedTopology: true
  })
  .then(() => {
    console.log("yes, mongodb is connected.");
  })
  .catch((error) => {
    console.log("An error occured while connecting to the database.");
  }); 
}

module.exports = database;
