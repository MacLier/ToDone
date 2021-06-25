const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookie = require('cookie-parser');
const pug = require('pug');
const path = require('path');
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

app.get('/', async (req, res) => {
    // const users = await db.getAllUser()
    // if (req.originalUrl =='/register') {

    //     res.render('index', {
    //         title: 'To do or not to do',
    //         message: 'Registration is succesfull'
    //     })
    // }
    console.log(await db.read('Users'));
    res.render('index', {
        title: 'To do or not to do',
        message: 'But not try',
    })
});

app.post('/register', async (req, res) => {
    console.log("Post a /register-en");
    const result = await db.create("Users", req.body);
    console.log("result in register: " + result);
    res.redirect('/');

});
app.post('/login', async (req, res) => {
    console.log("Post a /login-on");
    const result = await db.read("Users", req.body);
    if (result.email == req.body.email && result.password == req.body.password) {
        console.log("Your logis is successful.");
        res.cookie(forceFighter, "mtfbwy", {
            domain: 'http://localhost:4200/',
            path: '/',
            expires: new Date(Date.now() + 900000)

        })
        redirect('http://localhost:4200/')
    }
    console.log("result in login: " + result);
    res.redirect('/');

});

app.get('/api', async (req, res) => {
    console.log("GET a /api-n");
    // if (req.cookies)
    const result = await db.getTasks("Todos", "Events", "ShoppingLists")
    res.json(result);
});
app.post('/api/todos', async (req, res, next) => {
    console.log("POST a /api/todos-on");
    const result = await db.create("Todos", req.body);
    res.json(result);
    res.redirect('/api');
})
app.post('/api/events', async (req, res, next) => {
    console.log("POST a /api/events-en");
    const result = await db.create("Events", req.body);
    // res.json(result);
    res.redirect('/api');
})
app.post('/api/shoppingLists', async (req, res, next) => {
    console.log("POST a /api/shoppingLists-en");
    const result = await db.create("ShoppingLists", req.body);
    res.json(result);
    res.redirect('/api');
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