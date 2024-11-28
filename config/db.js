const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://0.0.0.0/MEN').then(() => {
    console.log('Connected to MongoDB');
})

module.exports =connection;