const express = require('express');
const app = express();
const ejs = require('ejs');
 

app.set('view engine', ejs);

app.get('/', (req, res)=>{
    var date = new Date();
    var currentDay = date.getDay();
    var day = "";
    if(currentDay === 6 || currentDay === 0) {
        day = "Weekend";
    } else {
        day = "Weekday";
    }
    console.log(day);
    res.render("index", {kindOfDay: day});
})

app.listen(3000, ()=>{
    console.log("Server is up and running.");
})