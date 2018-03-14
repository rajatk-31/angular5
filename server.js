const express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
config = require('./config/config.json')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect(config.MONGO, (err, data)=>{
    if(err) throw err;
    else console.log("Database connected.")
})



app.listen(config.PORT, ()=>{
    console.log("Server started at port : "+config.PORT);
})
