'use strict'
const http = require('http');

let getData = http.get(process.argv[2], (res) => {
    res.setEncoding('utf8');
    res.on('data', (data) => {
        console.log(data);  
    })
})