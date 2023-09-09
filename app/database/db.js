const mongoose = require('mongoose');
require('dotenv').config;

const connectToDatabase = async () => {
    // MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  
  .then(() => {
      console.log('Connected to MongoDB');
  })
    .catch(error => {
      console.error('Error connecting to MongoDB:', error.message);
  });
};

module.exports = {
    connectToDatabase,
  };