const BlogRepositories = require("../repositories/blogRepositories");
const express = require("express");
const routeLabel = require("route-label");
const router = express.Router();
const namedRouter = routeLabel(router);


class blogController {

    async blogList(req,res){
        try{
            res.render('blog/list',{
                title:"blog page"
            })

        }catch(error){
            console.log(error);
        }   

    }

    async blogAdd(req,res){
        try{
            res.render('blog/add',{
                title:"blog page"
            })

        }catch(error){
            console.log(error);
        }   

    }

    async blogCreate(req,res){
        try{
           
            let saveData = await BlogRepositories.save(req.body);
            console.log('blog',saveData);
            
            console.log("success", "Blog Added Successfully!");
            res.redirect(namedRouter.urlFor("blog-list"));
            

        }catch(error){
            console.log(error);
        }   

    }
}

module.exports =new blogController();