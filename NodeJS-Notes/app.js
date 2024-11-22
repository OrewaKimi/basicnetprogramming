require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = process.env.PORT || 5000;

// Initialize and configure session
app.use(session({
    secret: process.env.SESSION_SECRET || 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
    }),
}));

// Initialize Passport and session handling
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to Database
connectDB();

// Serve static files
app.use(express.static('public'));

// Template Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./server/routes/index'));
app.use('/dashboard', require('./server/routes/dashboard'));

// Handle 404 errors
app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
