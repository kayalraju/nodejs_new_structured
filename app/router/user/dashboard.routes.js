const express = require('express');
const routeLabel = require('route-label');
const dashboardController = require('../../modules/dashboard/controller/dashboardController');
const router = express.Router();
const namedRouter = routeLabel(router);


namedRouter.get('dahboard-page','/', dashboardController.dashboard);
namedRouter.get('admin-login','/admin-login', dashboardController.adminLogin);



module.exports = router;