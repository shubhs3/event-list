const { Event } = require('../models');

const queryEvents = async (filter, options) => {
  const products = await Event.paginate(filter, options);
  return products;
};

const createEvent = async (data) => {
  const event = await Event.create(data);
  return event;
};

const updateEvent = async (id, body) => {
  const event = await Event.findByIdAndUpdate(id, body, { new: true });
  return event;
};

const deleteEvent = async (id) => {
  const event = await Event.deleteOne(id);
  return event;
};

const getAllEvents = async (filter,options) => {
  let event;
  event = await Event.paginate(filter,options);
  return event;
};

const getEventById = async (id) => {
  let event = {};
  event = await Event.findById(id);
  return event;
};

module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
  getEventById,
  getAllEvents,
  queryEvents,
};
