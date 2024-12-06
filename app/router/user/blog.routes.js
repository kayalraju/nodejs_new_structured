const express = require('express');
const routeLabel = require('route-label');
const blogController = require('../../modules/blog/controller/blogController');
const router = express.Router();
const namedRouter = routeLabel(router);


namedRouter.get('blog-list','/allblog', blogController.blogList);
namedRouter.get('blog-add','/add-blog', blogController.blogAdd);
namedRouter.post('blog-create','/create-blog', blogController.blogCreate);


module.exports = router;