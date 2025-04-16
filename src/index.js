const express = require('express');
const app = express();
const appRouter = require('../routes/app.route.js');
require('dotenv').config();

app.use('/app', appRouter);

app.listen(process.env.PORT, () =>{
    console.log("App is up!")
});