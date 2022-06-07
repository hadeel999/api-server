'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();

const notFoundHandler = require("./errors-handlers/404");
const errorHandler = require("./errors-handlers/500");

const clothesRoute=require("./routes/clothes");
const foodRoute=require("./routes/food");

app.use(express.json());
app.use(clothesRoute);
app.use(foodRoute);

app.use("*", notFoundHandler);
app.use(errorHandler); 

function start(PORT) {
    app.listen(PORT, () => {
        console.log(`Listen and Running on port ${PORT}`);
    });
}

module.exports = {
    app: app,
    start: start,
};