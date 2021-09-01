const express = require('express');
const app = express();
const path = require('path')
const db = require('../data/mongo')

app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(process.env.PORT || 3000)