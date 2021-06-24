const express = require('express');
const pug = require('pug');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./database.js');
const db = require('./dbservice.js');
const { json } = require('body-parser');
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
    console.log('req body: ' + JSON.stringify(req.cookies));
    // res.send(db.getAllUser())

    // if (req.originalUrl =='/register') {

    //     res.render('index', {
    //         title: 'To do or not to do',
    //         message: 'Registration is succesfull'
    //     })
    // }
    res.render('index', {
        title: 'To do or not to do',
        message: 'But not try'
    })
});

app.post('/register', async (req, res) => {
    console.log("Post a /register-en");
    const result = await db.createUser(req.body);
    console.log("result: " + result);
    if (!result) {
        res.redirect('/');

    } else {
        res.json(result);
    }

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