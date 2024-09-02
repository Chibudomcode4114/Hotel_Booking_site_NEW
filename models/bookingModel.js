const mongoose = require('mongoose');

// Schema for the booking model
const bookingSchema = new mongoose.Schema({
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel',
        required: [true, 'Booking must state a hotel']
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        required: [true, 'Bookings must have a room']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Bookings must state a user']
    },
    checkInDate: {
        type: Date,
        required: [true, 'Booking must have a check-in date']
    },
    checkOutDate: {
        type: Date,
        required: [true, 'Booking must have a check-out date']
    },
    totalPrice: {
        type: Number,
        required: [true, 'Booking must have a total price']
    },
    status: {
        type: String,
        enum: ['confirmed', 'pending', 'canceled'],
        default: 'pending'
    },
    paymentMethod: {
        type: String,
        enum: ['credit card', 'debit card', 'PayPal'],
        required: [true, 'Booking must have a payment method'],
    },
    specialRequests: {
        type: String,
    },
}, {
    timestamps: true//Adds createdAt and updatedAt fields automatically
})

// Create a mongoose model from the booking schema
const Booking = mongoose.model('Booking', bookingSchema);


module.exports = Booking;