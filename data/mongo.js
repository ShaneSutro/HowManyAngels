const mongoose = require('mongoose');
const { Schema } = require('mongoose');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const schema = new Schema({
  id: Number,
  count: Number,
})

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true })
  .then(() => console.log('Connected!'))
  .catch((err) => console.error('Err:', err));

const db = mongoose.model('Data', schema);

module.exports = db;
