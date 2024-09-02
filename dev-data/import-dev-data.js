const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Import models
// const Hotel = require('../models/hotelModel');
const User = require('../models/userModel');
// const Guest = require('../models/guestModel');
// const Booking = require('../models/bookingModel');
// const Room = require('../models/roomModel');
// const Review = require('../models/reviewModel');

// Load environment variables from the config file
dotenv.config({ path: './config.env' });

// Replace the placeholder in the DATABASE string with the actual password from the environment variables
// const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
const dbUri = "mongodb+srv://chibudom:chibudom@uzocluster0.6fkbduq.mongodb.net/"

// Connect to the MongoDB database using Mongoose
mongoose.connect(dbUri, {
    useNewUrlParser: true, // Use the new URL parser to avoid deprecation warnings
    useUnifiedTopology: true, // Use the new server discovery and monitoring engine
}).then(() => console.log('DB connection successful!')); // Log a success message upon successful connection

// Read the JSON data files
const hotels = JSON.parse(fs.readFileSync(`${__dirname}/data/hotel.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/data/user.json`, 'utf-8'));
// const guests = JSON.parse(fs.readFileSync(`${__dirname}/data/guest.json`, 'utf-8'));
const bookings = JSON.parse(fs.readFileSync(`${__dirname}/data/booking.json`, 'utf-8'));
const rooms = JSON.parse(fs.readFileSync(`${__dirname}/data/room.json`, 'utf-8'));
// const reviews = JSON.parse(fs.readFileSync(`${__dirname}/data/review.json`, 'utf-8'));
console.log(hotels);

// Function to import data into the database
const importData = async () => {
    try {
        // await Hotel.create(hotels); // Import hotels data
        await User.create(users, { validateBeforeSave: false }); // Import users data without validation
        // await Guest.create(guests); // Import guests data
        // await Booking.create(bookings); // Import bookings data
        // await Room.create(rooms); // Import rooms data
        // await Review.create(reviews); // Import reviews data
        console.log('Data successfully loaded!'); // Log success message
        process.exit(); // Exit the process after successful data import
    } catch (err) {
        console.log(err); // Log any errors that occur
        process.exit(1); // Exit the process with a failure code
    }
};

// Function to delete all data from the database
const deleteData = async () => {
    try {
        await Hotel.deleteMany(); // Delete all hotels
        await User.deleteMany(); // Delete all users
        // await Guest.deleteMany(); // Delete all guests
        // await Booking.deleteMany(); // Delete all bookings
        await Room.deleteMany(); // Delete all rooms
        // await Review.deleteMany(); // Delete all reviews
        console.log('Data successfully deleted!'); // Log success message
        process.exit(); // Exit the process after successful data deletion
    } catch (err) {
        console.log(err); // Log any errors that occur
        process.exit(1); // Exit the process with a failure code
    }
};

// Check command-line arguments to decide whether to import or delete data
if (process.argv[2] === '--import') {
    importData(); // Call the importData function if the argument is '--import'
} else if (process.argv[2] === '--delete') {
    deleteData(); // Call the deleteData function if the argument is '--delete'
}

// To import data: node import-dev-data.js --import or npm run dev -- --import

// To delete data: node import-dev-data.js --delete or npm run dev -- --delete