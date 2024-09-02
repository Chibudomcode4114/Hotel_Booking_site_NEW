const Room = require('../models/roomModel');

// Get all rooms
exports.getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json({
            status: 'success',
            results: rooms.lenght,
            data: {
                rooms,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        })
    }
};

// Get a room
exports.getRoomById = async (req, res) => {
    try {
        const room = await Room.findById(res.params.id);
        if (!room) {
            return res.status(404).json({
                status: 'fail',
                message: 'No Room with that ID',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                room,
            },
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });

    }
};

// Create a new room
exports.addRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                room,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

// Update a room
exports.updateRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!room) {
            return res.status(404).json({
                status: 'fail',
                message: 'No room with that ID',
            });
        }
        res.status(200).json({
            status: 'success',
            data: {
                room,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
    }
};

// Delete a room
exports.deleteRoom = async (req, res) => {
    try {
        const room = await Room.findByIdAndDelete(req.params.id);
        if (!room) {
            return res.status(404).json({
                status: 'fail',
                message: 'No room found with that ID',
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