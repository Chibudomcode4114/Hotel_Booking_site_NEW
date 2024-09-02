const mongoose = require('mongoose');

// Schema for the review model
const reviewSchema = new mongoose.Schema({
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel', // Reference to the Hotel model
        required: [true, 'Review must be associated with a hotel']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: [true, 'Review must be associated with a user']
    },
    rating: {
        type: Number,
        required: [true, 'Review must have a rating'],
        min: [1, 'Rating must be at least 1'],
        max: [5, 'Rating cannot be more than 5']
    },
    reviewText: {
        type: String,
        required: [true, 'Review must have text'],
        trim: true // Remove leading and trailing whitespace
    },
    createdAt: {
        type: Date,
        default: Date.now // Automatically set the creation date
    }
});

// Create a Mongoose model from the schema
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review; // Export the model to be used in other files