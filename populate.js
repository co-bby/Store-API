require('dotenv').config();
const connectDB = require('./db/connect');
const Product = require('./models/product');

const jsonProduct = require('./products.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Product.deleteMany();
    await Product.create(jsonProduct);
    console.log('done');
  } catch (error) {
    console.log(error);
  }
};

start();
