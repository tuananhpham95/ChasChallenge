const express = require("express");
const bodyParser = require("body-parser");
const AccountModel = require('./models/User');
const Location = require('./models/location')
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL);


app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req,res) => {
    res.render('home')
});
app.get('/register', (req,res) => {
    res.render('register')
});
app.get('/login', (req,res) => {
    res.render('login')
});

app.use('/',authRoute);


app.listen(3000, () => {
    console.log("http://localhost:3000/");
});
