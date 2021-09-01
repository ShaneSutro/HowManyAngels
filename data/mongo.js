const mongoose = require('mongoose');
const { Schema } = require('mongoose');
if (process.env.NODE_ENV === 'DEV') {
  require('dotenv').config();
}

const db = mongoose.connect(process.env.MONGO_DB_URI, { useNewUrlParser: true });

mongoose.connection.on('connect', () => {
  console.log('Connected to Atlas!')
})

export default db;
