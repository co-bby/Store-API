const getAllProductsStatic = async (req, res) => {
  throw new Error('testing error');
  res.status(202).json({ msg: 'products testing routes' });
};

const getAllProducts = async (req, res) => {
  res.status(202).json({ msg: 'products testing routes' });
};

module.exports = {
  getAllProductsStatic,
  getAllProducts,
};
