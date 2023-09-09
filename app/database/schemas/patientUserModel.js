const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String,
        required : true,
    },
    email: { 
        type: String, 
        required: true,
        unique: true 
    },
    phone: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    nic: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    },
    { timestamps: true}
  );

  module.exports = mongoose.model('patients', userSchema);