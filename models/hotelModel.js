const mongoose = require('mongoose');

// Define a schema for the hotel, outlining the structure of hotel documents in the database
const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A hotel must have a name'], // Validate that the name field is required
    },
    // Other fields can be added here, such as location, rating, etc.
});

// Create a Mongoose model from the schema, which allows interaction with the `hotels` collection in MongoDB
const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel; // Export the model to be used in other files
