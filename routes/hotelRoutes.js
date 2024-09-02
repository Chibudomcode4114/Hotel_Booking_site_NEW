const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');


//get all hotels
router.get('/', hotelController.getAllHotels);

//get a hotel by ID
router.get('/:id', hotelController.getHotelById);

//add a hotel
router.post('/', hotelController.addHotel);

//update a hotel
router.put('/:id', hotelController.updateHotel);

// delete a hotel
router.delete('/:id', hotelController.deleteHotel);

module.exports = router;