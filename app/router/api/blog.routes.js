
const express = require('express');
const routeLabel = require('route-label');
const BlogController = require('../../webservice/BlogController');


// Initiallize the express router for router object
const router = express.Router();


const namedRouter = routeLabel(router);

namedRouter.get('all-blog-list','/all-blog',BlogController.allBlog)    



module.exports = router;