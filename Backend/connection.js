require('dotenv').config();
const { log } = require('console');
const mongoose = require('mongoose');

const url = process.env.DB_URL;

//asynchronous function

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
console.log(err);
});
module.exports = mongoose;