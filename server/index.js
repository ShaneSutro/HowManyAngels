const express = require('express');
const app = express();
const path = require('path')
const db = require('../data/mongo')

app.use(express.static(path.resolve(__dirname, '../build')));

app.use('/db', (req, res) => {
  // db.create({ count: 0 }).then((data) => console.log(data))
  db.find({}).then(data => console.log(data))
  res.send({ info: 'here'})
})

app.listen(process.env.PORT || 3001)