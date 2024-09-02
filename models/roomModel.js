const mongoose = require('mongoose');

// Define a schema for the room, outlining the structure of room documents in the database
const roomSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: [true, 'A room must have a number'], // Validate that the number field is required
    },
    type: {
        type: String,
        required: [true, 'A room must have a type'], // Validate that the type field is required Single: A room designed for one person.
        // Double: A room with two beds or a bed suitable for two people.
        // Suite: A more luxurious room with additional space and amenities.
        // Family: A larger room or suite designed to accommodate families.
        // Penthouse: A high-end room with luxury features and the best views.
        // Luxury Suite: A top-tier suite with premium amenities
    },
    price: {
        type: Number,
        required: [true, 'A room must have a price'], // Validate that the price field is required
    },
    capacity: {
        type: Number,
        required: [true, 'A room must have a capacity'], // Validate that the capacity field is required
    },
    // Additional fields can be added here as needed// Other fields can be added here, such as type, price, capacity, etc.
});

// Create a Mongoose model from the schema, which allows interaction with the `rooms` collection in MongoDB
const Room = mongoose.model('Room', roomSchema);

module.exports = Room; // Export the model to be used in other files