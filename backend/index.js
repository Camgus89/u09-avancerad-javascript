const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser');
const productController = require('./controllers/productController');
const cartController = require('./controllers/cartController');
const allowedOrigin = 'https://vapehousealvsjo.netlify.app/'; // Ersätt med den faktiska URL:en till din frontend

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    headers: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  next();
});



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

app.post('/cart/:userID', cartController.addToCart);
app.get('/cart/:userID', cartController.getAllCartItems);
app.put('/cart/:userID', cartController.updateCartItem);
app.delete('/cart/:productId/:userID', cartController.removeFromCart);

app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));