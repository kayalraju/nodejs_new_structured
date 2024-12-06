
const express = require('express');
const routeLabel = require('route-label');

//const userController = require('../../controller/userController');
//const authCheck = require('../../middleware.js/auth');

// Initiallize the express router for router object
const router = express.Router();

// Wrap the express router with the router-label package
const namedRouter = routeLabel(router);


//namedRouter.post('register-user','/register', userController.register)
//namedRouter.post('login-user','/login',userController.login)

// // Global authentication
// namedRouter.all("/dashboard/*",authCheck)

// namedRouter.get('user-dashboard','/dashboard',userController.dashboard)



module.exports = router;