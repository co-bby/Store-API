const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort('-name price');
  res.status(202).json({ products, nbHits: products.lenghth });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === 'true' ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: 'i' };
  }

  let results = Product.find(queryObject);

  if (sort) {
    const sortList = sort.split(',').join(' ');
    results = results.sort(sortList);
  } else {
    results = results.sort('createAt');
  }

  const products = await results;
  res.status(202).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
