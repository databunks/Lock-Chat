"use strict";
const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;
fs.readFile('../../Views/client.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function (request, response) {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write(html);
        response.end();
    }).listen(port);
});
