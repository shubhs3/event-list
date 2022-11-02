const catchAsync = require('../utils/catchAsync');
const { categoryService } = require('../services');

const getAllCategories = async (req, res) => {
  const List = await categoryService.getAllCategories();
  console.log('===>', List);
  res.send(List);
};

module.exports = {
  getAllCategories: catchAsync(getAllCategories),
};
