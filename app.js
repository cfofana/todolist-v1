const express = require('express');
const app = express();
const ejs = require('ejs');
 
app.get('/', (req, res)=>{
    res.render('index', {foo: 'Foo'});
})

app.set('view engine', ejs);



app.listen(3000, ()=>{
    console.log("Server is up and running.");
})