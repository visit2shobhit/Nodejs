const express = require("express");

const fabObj = require("./math-logic/fibonacci-series");
var os = require('os');

const app = express();
// http://localhost:3000?number=10
app.get("/", (request, response) => {
    console.log(request.query.number);
    let number = fabObj.calculateFibonacciValue(Number.parseInt(request.query.number));
    response.send(`<h1>${number}</h1>`);
});
app.get("/findsysteminfo", (request, response) => {
    let cpuLength = os.cpus().length
    response.send(`<h1>${cpuLength}</h1>`);
});
app.listen(3000, () => console.log("Express App is running on PORT : 3000"));