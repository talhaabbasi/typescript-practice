"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/2';
axios_1["default"].get(url).then(function (response) {
    console.log(response.data);
});
