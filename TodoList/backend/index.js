const express = require('express');
const app = express();
const port = 3000;
const db = require("./models/");

app.use(express.json());

require('./routes')(app);

const path = require('path'); 
require('dotenv').config();

const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "../frontend")))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.sequelize.sync({
    //force: true
    //alter: true
}).then(() => {
    console.log("db resync");
});

app.get('/todos', (req, res) => {
    const rutaArchivo = path.resolve(__dirname, '..', 'frontend', 'index.html');
    res.sendFile(rutaArchivo);
});


app.listen(port, () => {
    console.log(`puerto corriendo en : ${port}`);
});
