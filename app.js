const express = require('express');
const bodyParser = require('body-parser');
const database = require('./db.js');
const db = require('./db.js');
const port = 3232;


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello backend')
})

app.get('/api', (req, res) => {
    res.json(db)
})

app.all('*', (req, res) => {
    res.status(404);
    res.send('Page or request not exist')
})

app.listen(port, () => {
    console.log(`Server is running in port: ${port}`);
})