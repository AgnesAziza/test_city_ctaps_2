import express from 'express';
import hourly_consumption from './hourly_consumption.json'
import fs from 'fs'
import test from './test.js'

const app = express()
const port = 1258

fs.readFile('src/hourly_consumption.json', 'utf8', function(err, contents) {
    console.log(contents);
});

test()



app.listen(port, () => {
  console.log(`express is running on port: ${port} ` )
})
