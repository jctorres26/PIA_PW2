const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
require('./src/models/connection');

const student_router = require('./src/routes/studentRouter');
const admin_router = require('./src/routes/adminRouter');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Api is siu");
}); 

app.use('/api',student_router);
app.use('/api',admin_router);

app.listen(port, () => {
    console.log(`La aplicación se está ejecutando en el puerto: ${port}`)
})