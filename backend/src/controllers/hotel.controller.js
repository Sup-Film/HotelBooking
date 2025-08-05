const hotelsData = require('../data/hotelData.json')

const searchHotels = (req, res) => {
  try {
    const { location } = req.query;

    if (!location) {
      return res.json(hotelsData);
    }

    const results = hotelsData.filter(hotel =>
      hotel.location.toLowerCase().includes(location.toLowerCase())
    );

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

const getHotelById = (req, res) => {
  try {
    const { id } = req.params;
    const hotel = hotelsData.find(h => h.id.toString() === id);
    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }
    res.json(hotel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
};

const calculateCost = (req, res) => {
  try {
    const { hotelId, roomType, days } = req.body;

    if (!hotelId || !roomType || !days || isNaN(parseInt(days)) || parseInt(days) <= 0) {
      return res.status(400).json({ error: 'Missing or invalid hotelId, roomType, or days in request body' });
    }

    const hotel = hotelsData.find(h => h.id === parseInt(hotelId));

    if (!hotel) {
      return res.status(404).json({ error: 'Hotel not found' });
    }

    const room = hotel.rooms.find(r => r.type === roomType);

    if (!room) {
      return res.status(404).json({ error: 'Room type not found' });
    }

    const roomPrice = room.price;
    const numberOfDays = parseInt(days, 10);
    const totalCost = roomPrice * numberOfDays;
    const vat = totalCost * 0.07; // 7% VAT
    const finalCost = totalCost + vat;
    res.json({
      subtotal: totalCost,
      discount: 0,
      priceAfterDiscount: totalCost,
      taxesAndFees: vat,
      totalAmount: finalCost,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An unexpected error occurred' });
  }
}

module.exports = {
  searchHotels,
  calculateCost,
  getHotelById
};
