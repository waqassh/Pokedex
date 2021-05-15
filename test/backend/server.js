const express = require("express");
const bodyParser = require("body-parser");
const routesHandler = require('./Routes/handler.js');
const routeDetail = require('./Routes/detailsPokemon.js');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',routesHandler);
app.use('/',routeDetail);

app.listen(4000, () => {
})