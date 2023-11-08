const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');

const allowedOrigin = 'http://localhost:3000'; // Ersätt med den faktiska URL:en till din frontend

app.use(
  cors({
    origin: allowedOrigin, // Tillåt endast begäranden från din frontend
    credentials: true, // Tillåt autentiseringsuppgifter i begäranden
  })
);
const productController = require('./controllers/productController');

// Database connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('Database connected'))
.catch((err) => console.log('Database not connected', err))

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.post('/products', productController.createProduct);
app.get('/products', productController.getAllProducts);
app.get('/products/:productId', productController.getProductById);
app.put('/products/:productId', productController.updateProduct);
app.delete('/products/:productId', productController.deleteProduct);

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));