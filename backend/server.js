const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const hotelRoutes = require('./src/routes/hotel.routes')

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

app.use('/api', hotelRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
