const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { eventService } = require('../services');


const createEvent = async (req, res) => {
  const body = req.body;
  body.image = req.file.filename;
  const result = await eventService.createEvent(body);
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
  var filter = {};
  var options = pick(req.query, ['sortBy', 'limit', 'page']);
  const event = await eventService.getAllEvents(filter, options);
  res.send(event);
};

const getEventById = async (req, res) => {
  const event = await eventService.getEventById(req.params.eventId);
  res.send(event);
};

const getEvents = async (req, res) => {
  var filter = pick(req.query, ['category_id', 'location']);
  var options = pick(req.query, ['sortBy', 'limit', 'page']);
  filter = { ...filter };
  options = { ...options };
  Object.keys(filter).forEach(function (key) {
    if (filter[key] === undefined || filter[key] === 'null' || filter[key] === '') {
      delete filter[key];
    }
  });
  const result = await eventService.queryEvents(filter, options);
  res.send(result);
};

module.exports = {
  createEvent: catchAsync(createEvent),
  updateEvent: catchAsync(updateEvent),
  deleteEvent: catchAsync(deleteEvent),
  getAllEvents: catchAsync(getAllEvents),
  getEventById: catchAsync(getEventById),
  getEvents: catchAsync(getEvents),
};
