const BlogRepositories = require("../modules/blog/repositories/blogRepositories");


class BlogController {


async allBlog(req,res){
    try{
        let blog = await BlogRepositories.getAll();
        res.status(200).json({
            status:true,
            data:blog
        })  
       
    }catch(error){
        console.log(error);
    }   
}


}


module.exports =new BlogController()