const express = require('express');
const validate = require('../../middlewares/validate');
const eventValidation = require('../../validations/event.validation');
const eventController = require('../../controllers/event.controller');
const router = express.Router();

router.route('/').post(validate(eventValidation.createEvent),eventController.createEvent);
router.route('/:eventId').put(validate(eventValidation.updateEvent), eventController.updateEvent);
router.route('/:eventId').delete(validate(eventValidation.deleteEventById),eventController.deleteEvent);


router.route('/all').get(eventController.getAllEvents);
router.route('/').get(validate(eventValidation.getEvents),eventController.getEvents);
router.route('/:eventId').get(validate(eventValidation.getEventById),eventController.getEventById);

module.exports = router;
