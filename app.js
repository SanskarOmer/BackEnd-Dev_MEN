const express = require('express');
const morgan = require('morgan');
const app = express();
const userModel = require('./models/user');  
const dbConnection = require('./config/db');

app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.use(express.static('public'));


// app.use((req, res, next)=>{
//     console.log(`New request received at ${new Date().toISOString()}`);
//      next();
// });

app.post('/get-data', (req, res)=>{
    console.log(req.body);
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

app.get('/register', (req, res) => { 
    res.render('register');
});

app.post('/register',  (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new userModel({ username, email, password });
    newUser.save()
       .then(() => res.send('User registered successfully'))
       .catch(err => res.status(400).send(err));
});

app.get('/get-user', async (req, res) => {
    await userModel.findOne({
        username: 'aditi'
    }).then((user) => {
        res.send(user);
    });
})

app.get('/update', (req, res) => {
    userModel.updateOne({
        username: 'a'
    }, {
        username: 'aditi'
    }).then(() => {
        res.send('User updated successfully');
    });
})

app.get('/delete', (req, res) => {
    userModel.deleteOne({
        username: 'aditi'
    }).then(() => {
        res.send('User deleted successfully');
    });
})

app.listen(3000);