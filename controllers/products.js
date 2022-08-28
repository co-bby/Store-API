const Product = require('../models/product');

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({}).sort('-name price');
  res.status(202).json({ products, nbHits: products.lenghth });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort, fields } = req.query;
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
  // sort
  if (sort) {
    const sortList = sort.split(',').join(' ');
    results = results.sort(sortList);
  } else {
    results = results.sort('createAt');
  }

  // fields
  if (fields) {
    const fieldsList = fields.split(',').join(' ');
    results = results.select(fieldsList);
  }

  const products = await results;
  res.status(202).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
