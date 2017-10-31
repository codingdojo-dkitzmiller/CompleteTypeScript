"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var api_1 = require("./api/api");
var apiErrorHandler_1 = require("./apiErrorHandler");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
api_1.initRestApi(app);
app.use(apiErrorHandler_1.apiErrorHandler);
app.listen(8090, function () {
    console.log("Server is running on port: " + 8090);
});
// const p = findAllCourses();
// p.then(results => console.log(JSON.stringify(results)));
//# sourceMappingURL=server.js.map