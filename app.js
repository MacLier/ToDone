const express = require('express');
const app = express();
const port = 3232;

app.get('/', (req, res) => {
    res.send('Hello backend')
})

app.listen(port, () => {
    console.log(`Server is running in port: ${port}`);
})