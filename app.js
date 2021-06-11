const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const database = require('./database.js');
const db = require('./dbservice.js');
const port = 3232;


const app = express();

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
    res.send('Hello backend')
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
app.delete('/api', async (req, res) => {
    console.log("DELETE a /api-n");
    const result = await db.deleteTask(req.body.ID, database)
})

app.all('*', (req, res) => {
    res.status(404);
    res.send('Page or request not exist')
});

app.listen(port, () => {
    console.log(`Server is running in port: ${port}`);
});