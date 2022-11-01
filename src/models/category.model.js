const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const categorySchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		index: true,
	},
});

categorySchema.index({ "$**": "text", _type: 1 });
// add plugin that converts mongoose to json
categorySchema.plugin(toJSON);
categorySchema.plugin(paginate);

/**
 * @typedef Event
 */
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
