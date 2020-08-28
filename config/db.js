const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.set('useCreateIndex', true)
const connectDB = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('MongoDB Connected');
    }).catch(err => {
        console.log(err.message);
        process.exit(1);
    });
};

module.exports = connectDB;