const express = require('express');
const routeLabel = require('route-label');
const courseController = require('../../modules/course/controller/courseController');
const router = express.Router();
const namedRouter = routeLabel(router);


namedRouter.get('course-list', '/course-list',courseController.list);



module.exports = router;