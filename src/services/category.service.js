const { Category } = require("../models");

const getAllCategories = async () => {
	let catagories;
	catagories = await Category.find();
	return catagories;
};

module.exports = { getAllCategories };
