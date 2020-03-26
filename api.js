'use strict'

const express = require('express')
const app = express()
const port = 8080
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

app.get('/test', function(req,res){
  res.json({data: "test"});
})

app.post('/form-email', function (req, res) {
  res.json({data: "OK"});
})
app.listen(port, () => console.log(`App listening on port ${port}!`))