const express = require('express');

const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.set('view engine', 'ejs');


app.use((req, res, next)=>{
    console.log(`New request received at ${new Date().toISOString()}`);
     next();
});

app.get('/get-data', (req, res)=>{
    console.log(req.query);
    res.send( 'Data retrieved successfully');
});


app.get('/', (req, res) => { 
    res.render('index');
});

app.get('/about', (req, res) => { 
    res.render('about');
});

app.get('/contact', (req, res) => { 
    res.render('contact');
});

app.listen(3000);