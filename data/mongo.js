const mongoose = require('mongoose');
const { Schema } = require('mongoose');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true });

mongoose.connection.on('connect', () => {
  console.log('Connected to Atlas!')
})

mongoose.connection.on('error', (err) => {
  console.log('Error:', err)
})

const db = new Schema({
  count: Number,
})

module.exports = db;
