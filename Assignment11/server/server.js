const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ecommerceDB')
.then(() => console.log('MongoDB Connected'));

const productRoutes = require('./routes/productRoutes');

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Backend Running');
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
