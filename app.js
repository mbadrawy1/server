require('dotenv').config();

const express = require('express');

const router = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./Models/database');
const models= require('./Models')

const port = process.env.PORT || 5000;

const app = express();

app.use('/', router);
app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/', (req, res) => {
    res.json({
        message: "Hello world"
    })
})

db.sync({ alter: true}).then(()=> {
    app.listen(port, () => {
        console.log("Server started on port " + port);
});
});