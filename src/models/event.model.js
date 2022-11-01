const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");

const eventSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		index: true,
	},
	category_id: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		trim: true,
		index: true,
	},
	location: {
		type: String,
		required: true,
		trim: true,
		index: true,
	},
	description: {
		type: String,
		required: true,
		trim: true,
		index: true,
	},
	image: {
		type: String,
		required: true,
		trim: true,
		index: true,
	},
});

eventSchema.index({ "$**": "text", _type: 1 });
// add plugin that converts mongoose to json
eventSchema.plugin(toJSON);
eventSchema.plugin(paginate);

/**
 * @typedef Event
 */
const Event = mongoose.model("Events", eventSchema);

module.exports = Event;
