// 3rd-party moduel
const mongoose = require("mongoose");
const { Schema } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    author: {
      type: String,
      require: [true, "author is required"],
    },
    content: {
      type: String,
      required: true,
    },
   
    profileImage: {
      type: String,
      default: "uploads/profile/default-image.png",
    },
    isVerified: {
      type: Boolean,
      default: false, // Default value, change if needed
    },
    status: {
      type: String,
      default: "active",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);





const BlogModel = mongoose.model("blog", blogSchema);
module.exports = BlogModel;
