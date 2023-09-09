const {Router} = require('express');
const User = require('../database/schemas/patientUserModel');
const { hashPassword} = require('../utils/helpers');
const router = Router();

router.post('/', async (req, res) => {
    const {name, email, phone, nic } = req.body;

    // Validate inputs
    if (!name || !email || !phone || !nic) {
        return res.status(400).json({ message: 'Please provide all information' });
      }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, {name}] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

        //hash password before save
    const password = hashPassword(req.body.password);
    console.log(password);
        // Create a new user instance
    const newUser = new User({
        name,
        email,
        phone,
        nic,
        password,
      });
    
      // Save the user to the database
    await newUser.save();

    return res.status(201).json({ message: 'User registration successful!' });
  });

  module.exports = router;