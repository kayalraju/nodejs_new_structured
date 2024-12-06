const BlogModel = require('../model/blogModel');


const BlogRepositories = {
  //get all blog
  getAll: async () => {
        try {
          let blog = await BlogModel.find();
          if (!blog) {
            return null;
          }
          return blog;
        } catch (e) {
          return e;
        }
      },
  
    //create blog
    save: async (data) => {
        try {
          let save = await BlogModel.create(data);
          if (!save) {
            return null;
          }
          return save;
        } catch (e) {
          return e;
        }
      }

      //edit blog
      

}


module.exports = BlogRepositories;
