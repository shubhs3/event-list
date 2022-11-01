const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createEvent = {
	body: Joi.object().keys({
		name: Joi.string().required(),
		location: Joi.string().required(),
		description: Joi.string().required(),
		image: Joi.string().required(),
		date: Joi.string().required(),
		time: Joi.string().required(),
	}),
};

const getEvents = {
	query: Joi.object().keys({
		category: Joi.string(),
		location: Joi.string(),
		sortBy: Joi.string(),
		limit: Joi.number().integer(),
		page: Joi.number().integer(),
	}),
};

const getEventById = {
	params: Joi.object().keys({
		eventId: Joi.string().custom(objectId),
	}),
};
const deleteEventById = {
	params: Joi.object().keys({
		eventId: Joi.required().custom(objectId),
	}),
};
const updateEvent = {
	params: Joi.object().keys({
		eventId: Joi.required().custom(objectId),
	}),
	body: Joi.object()
		.keys({
			name: Joi.string(),
			date: Joi.string(),
			location: Joi.string(),
			description: Joi.string(),
			time: Joi.string(),
		})
		.min(1),
};

module.exports = {
	createEvent,
	getEvents,
	getEventById,
	updateEvent,
	deleteEventById,
};
