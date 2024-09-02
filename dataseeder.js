const mongoose = require('mongoose');
const Hotel = require('./models/hotelModel');
const User = require('./models/userModel');
const Room = require('./models/roomModel');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

// Connect to MongoDB
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('DB Connection successful on the dataseeder!'));


// Function to insert data and retrieve IDs
const insertData = async () => {
    try {
        // Insert a hotel and retrieve the document
        const hotel = await Hotel.create({
            name: 'Grand Hotel',
            location: 'Downtown',
            price: 120
        });
        const hotelId = hotel._id; // Retrieve the hotel's ID

        // Insert a user and retrieve the document
        const user = await User.create({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'securepassword'
        });
        const userId = user._id; // Retrieve the user's ID

        // Insert a room and retrieve the document
        const room = await Room.create({
            number: 101,
            type: 'Deluxe',
            price: 150
        });
        const roomId = room._id; // Retrieve the room's ID

        console.log(`Hotel ID: ${hotelId}`);
        console.log(`User ID: ${userId}`);
        console.log(`Room ID: ${roomId}`);

        // You can now use these IDs for other operations, like creating bookings

    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        mongoose.disconnect(); // Close the connection
    }
};

// Run the function
insertData();

// code to run it in the terminal : "node dataSeeder.js"