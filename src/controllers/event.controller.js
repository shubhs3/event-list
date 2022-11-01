const pick = require("../utils/pick");
const catchAsync = require("../utils/catchAsync");
const { eventService } = require("../services");

const addEvent = async (req, res) => {
	const body = req.body;
	const result = await eventService.addEvent(body);
	res.send(result);
};

const updateEvent = async (req, res) => {
	const body = req.body;
	const result = await eventService.updateEvent(req.params.eventId, body);
	res.send(result);
};

const deleteEvent = async (req, res) => {
	const event = await eventService.deleteEvent(req.params.eventId);
	res.send(event);
};

const getAllEvents = async (req, res) => {
	const event = await eventService.getAllEvents();
	res.send(event);
};

const getEventById = async (req, res) => {
	const event = await eventService.getEventById(req.params.eventId);
	res.send(event);
};

const getEvents = async (req, res) => {
	const filter = pick(req.query, ["categoryId", "location"]);
	const options = pick(req.query, ["sortBy", "limit", "page"]);
	const result = await eventService.queryEvents({ ...filter }, { ...options });
	res.send(result);
};

module.exports = {
	addEvent: catchAsync(addEvent),
	updateEvent: catchAsync(updateEvent),
	deleteEvent: catchAsync(deleteEvent),
	getAllEvents: catchAsync(getAllEvents),
	getEventById: catchAsync(getEventById),
	getEvents: catchAsync(getEvents),
};
