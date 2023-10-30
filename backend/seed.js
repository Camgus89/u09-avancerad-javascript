const mongoose = require('mongoose');
const products = require('./products'); // Importera Product-modellen

const productsData = [
    {
      name: 'VapeOne',
      desc: 'strawberry',
      price: 89,
      image: 'https://cdn.starwebserver.se/shops/filmkedjan/files/none-strawberryice-1.png',
    },
    {
        name: 'VapeOne',
        desc: 'apple',
        price: 89,
        image: 'https://cdn.starwebserver.se/shops/filmkedjan/files/none-strawberryice-1.png',
      },
      {
        name: 'VapeOne',
        desc: 'mango',
        price: 89,
        image: 'https://cdn.starwebserver.se/shops/filmkedjan/files/none-strawberryice-1.png',
      },
    // Lägg till andra produkter här
  ];
  
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to MongoDB');
  
    // Lägg till produkterna i databasen
    products.insertMany(productsData, (err, products) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Produkter tillagda i databasen:', products);
      }
  
      // Stäng anslutningen till databasen när du är klar
      mongoose.connection.close();
    });
  });
  