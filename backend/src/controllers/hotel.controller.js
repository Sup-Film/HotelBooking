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
    const hotel = hotelsData.find(h => h.id === parseInt(id));
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
    const { roomType, days } = req.query;

    if (!roomType || !days) {
      return res.status(400).json({ error: 'Missing roomType or days parameter' });
    }

    let roomPrice = 0;
    for (const hotel of hotelData) {
      const foundRoom = hotel.rooms.find(room => room.type === roomType);
      if (foundRoom) {
        roomPrice = foundRoom.price;
        break;
      }
    }

    if (roomPrice === 0) {
      return res.status(404).json({ error: 'Room type not found' });
    }

    const numberOfDays = parseInt(days, 10);
    const totalCost = roomPrice * numberOfDays;
    const vat = totalCost * 0.07; // 7% VAT
    const finalCost = totalCost + vat;

    res.json({
      subtotal: totalCost.toFixed(2),
      discount: "0.00",
      priceAfterDiscount: totalCost.toFixed(2),
      taxesAndFees: vat.toFixed(2),
      totalAmount: finalCost.toFixed(2),
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
