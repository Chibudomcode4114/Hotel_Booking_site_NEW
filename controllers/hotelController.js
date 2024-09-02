const Hotel = require('../models/hotelModel');

// Get all hotels
exports.getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json({
            status: 'success',
            results: hotels.lenght,
            data: {
                hotels,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        })
    }
};

// Get a hotel
exports.getHotelById = async (req, res) => {
    try {
        const hotel = await Hotel.findById(res.params.id);
        if (!hotel) {
            return res.status(404).json({
                status: 'fail',
                message: 'No Hotel with that ID',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                hotel,
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });

    }
};

// Create a new hotel
exports.addHotel = async (req, res) => {
    try {
        const hotel = await Hotel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                hotel,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

// Update a hotel
exports.updateHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!hotel) {
            return res.status(404).json({
                status: 'fail',
                message: 'No hotel with that ID',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                hotel,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

// Delete a hotel
exports.deleteHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findByIdAndDelete(req.params.id);
        if (!hotel) {
            return res.status(404).json({
                status: 'fail',
                message: 'No hotel found with that ID',
            });
        }
        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};