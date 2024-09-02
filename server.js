const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');//Imports the Express app form app.js


// Import Routes
const hotelRoutes = require('./routes/hotelRoutes')
const roomRoutes = require('./routes/roomRoutes')
const userRoutes = require('./routes/userRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const adminRoutes = require('./routes/adminRoutes'); // Import admin routes


// Load environment variables from the config file
dotenv.config({ path: './config.env' });

// Replace the placeholder in the DATABASE string with the actual password from the variables.env file(sensitive)
const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
)

// Connect to the MongoDB database using mongoose
mongoose.connect(DB, {
    useNewUrlParser: true, // Use the new URL parser to avoid deprecation warnings
    useUnifiedTopology: true, // Use the new server discovery and monitoring engine
}).then(() => console.log('DB connection successful!'));// Logs a success message if the connection is successful

// Middleware
app.use(express.json());


// Routes
app.use('/api/admin', adminRoutes)
app.use('/api/hotels', hotelRoutes)
app.use('/api/rooms', roomRoutes)
app.use('/api/users', userRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/reviews', reviewRoutes)

// Define the port the server will listen on
const port = process.env.PORT || 3000;

// Start the server and listen for incoming requests
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});