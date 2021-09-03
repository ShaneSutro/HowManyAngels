const express = require('express');
const app = express();
const path = require('path')
const db = require('../data/mongo')

app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/db', (req, res) => {
  db.find({})
    .then(data => res.send(data))
    .catch(() => res.send(500))
})

app.post('/db', (req, res) => {
  console.log(req.body)
  db.findOneAndUpdate({id: 1},
    { $inc: { count: req.body.by}},
    (err) => {
      if (err) {
        res.sendStatus(500)
      } else {
        res.sendStatus(201)
      }
    })
})

app.listen(process.env.PORT || 3001)