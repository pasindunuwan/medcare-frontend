const {Router} = require('express');
//const nodemailer = require('nodemailer');
const User = require('../database/schemas/pharmacyUserModel');
const Vonage = require('@vonage/server-sdk'); // Require the Vonage SDK
const twilio = require('twilio');
const router = Router();
require('dotenv').config;


// Initialize Twilio with your Account SID and Auth Token
const client = new twilio('AC6751537853a98cc7dddc6b79df4ba591', '33d423aa5ceac95e9219898c3796a182');

/*
// Initialize Vonage with your API credentials
const vonage = new Vonage({
  apiKey: '7f4b4dbb',
  apiSecret: 'jopHfrnoL1kju5D1',
});
*/

// Generate a random 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}



// Function to send OTP via email
async function sendOTPByEmail(email, otp) {
  try {
    // Create a nodemailer transporter with your email service provider's configuration
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Replace with your email service
      auth: {
        user: 'ibrahchars@gmail.com', // Replace with your email address
        pass: 'ksoklxcsipegncax', // Replace with your email password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.MYEMAIL,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is: ${otp}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}


// Handle POST requests to '/api/doctorOTP'
router.post('/', async (req, res) => {
  try {
    // Extract the email from the request body
    const { email } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'User not found for the provided email' });
    }

    // Assuming the mobile number is stored in the user document
    const mobile = user.phone;

    // Generate a 6-digit OTP
    const otp = generateOTP();

    // Store the OTP along with an expiration timestamp
    const otpExpiration = new Date();
    otpExpiration.setMinutes(otpExpiration.getMinutes() + 10); // Expires in 10 minutes

    // Send OTP to mobile logic (you'll need to implement this)
    await sendOTPToMobile(mobile, otp);
    
    // Send the OTP via email (or any other method)
    await sendOTPByEmail(email, otp);

    // Respond with a success status and message
    return res.status(201).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});


async function sendOTPToMobile(mobile, otp) {
  try {
    // Use Twilio to send SMS
    await client.messages.create({
      body: `Your OTP is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
      to: mobile, // The recipient's mobile number
    });
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
}

/*
async function sendOTPToMobile(mobile, otp) {
  try {

    console.log(`Sending OTP to ${mobile}`);

    // Send SMS via Vonage
    vonage.message.sendSms(
      '+94701131230', // Virtual Number associated with your Vonage account
      mobile,
      `Your OTP is: ${otp}`,
      (err, responseData) => {
        if (err) {
          console.error('Error sending OTP:', err);
          throw err;
        } else {
          console.log('OTP sent successfully via Vonage:', responseData);
        }
      }
    );
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw error;
  }
}
*/

module.exports = router;