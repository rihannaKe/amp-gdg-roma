'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 80
const ampCors = require('amp-toolbox-cors')
const { join } = require('path')
const { promisify } = require('util')
const { readFile } = require('fs')
const readFileAsync = promisify(readFile)

const ampCorsMiddleware = ampCors({ verbose: true })
app.use(ampCors({
  verifyOrigin: false
}));

app.use(ampCorsMiddleware);

app.get('/', function (req, res) {
  res.send('Hello!')
})

app.get('/test', function(req,res){
  res.json({data: "test"});
})

app.post('/form-email', function (req, res) {
  res.json({data: "OK"});
})

app.get('/time', (request, response) => {
  response.json({
    time: new Date().toLocaleTimeString(),
  });
});

app.listen(port, () => console.log(`App listening on port ${port}!`))