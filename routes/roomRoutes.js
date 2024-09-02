const express = require('express');
const router = express.Router();
const roomController = require('../controllers/roomController');

//get all rooms
router.get('/', roomController.getAllRooms);

//get a room by ID (to be corrected to number later)
router.get('/:id', roomController.getRoomById);

//add a room
router.post('/', roomController.addRoom);

//update a room
router.patch('/:id', roomController.updateRoom);

// delete a room
router.delete('/:id', roomController.deleteRoom);

module.exports = router;