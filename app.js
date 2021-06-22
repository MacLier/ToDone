const express = require('express');
const pug = require('pug');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./database.js');
const db = require('./dbservice.js');
const port = 3232;


const app = express();
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '**');
//     res.setHeader('Access-Control-Allow-Headers', '**');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
//     next();
// });
app.use(cors());

app.get('/', (req, res) => {
    res.render('index', {
        title: 'To do or not to do',
        message: 'But not try'
    })
});
app.get('/test', (req, res) => {
    res.render('test', {
        title: 'To do or not to do',
        message: 'But not try'
    })
});
app.post('/register', async (req, res) => {
    console.log(req.body);
    // const result = await db.createTask(req.body, database);
    res.send(req.body);
    // res.render('index', {
    //     title: 'To do or not to do',
    //     message: 'But not try'
    // })
});

app.get('/api', (req, res) => {
    console.log("GET a /api-n");
    res.json(database);
});
app.post('/api', async (req, res, next) => {
    console.log("POST a /api-n");
    const result = await db.createTask(req.body, database);
    console.log(result);
    res.json(result);

})
app.put('/api', async (req, res) => {
    console.log("PUT a /api-n");
    const result = await db.updateTask(req.body.ID, req.body, database);
    res.json(result);
});
app.delete('/api/:id', async (req, res) => {
    console.log("DELETE a /api-n");
    const result = await db.deleteTask(req.params.id, database)
})

app.all('*', (req, res) => {
    res.status(404);
    res.send('Page or request not exist')
});

app.listen(port, () => {
    console.log(`Server is running in port: ${port}`);
});