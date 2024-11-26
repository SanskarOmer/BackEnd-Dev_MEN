const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use((req, res, next)=>{
    console.log(`New request received at ${new Date().toISOString()}`);
     next();
});

app.get('/', (req, res) => { 
    res.render('index');
});

app.listen(3000);