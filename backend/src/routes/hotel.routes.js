const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotel.controller');

router.get('/search', hotelController.searchHotels);
router.get('/:id', hotelController.getHotelById);
router.post('/calculate-cost', hotelController.calculateCost);

module.exports = router;
