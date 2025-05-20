require('dotenv').config();

// import express
const express = require('express');
const UserRouter = require('./routers/UserRouter');
const cors = require('cors');
const ContactRouter = require('./routers/ContactRouter');
const mongoose = require('./connection');

// initialize express
const app = express();

const port = process.env.PORT || 5000;

// middlewares
app.use(cors({
    origin: '*'
}));

app.use(express.json());
app.use('/user', UserRouter);
app.use('/contact', ContactRouter);

// endpoint or route
app.get('/', (req, res) => {
    res.send('response from express');
 });

 // add
app.get('/add',(req, res) => {
    res.send('response from add');
});

app.listen(port, () => {
    console.log('server started');
});  