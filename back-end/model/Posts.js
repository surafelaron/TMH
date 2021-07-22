import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: { 
      type: mongoose.Schema.Types.ObjectID, 
      ref: 'User' 
    },
    comment: {
      type: String,
      max: 2000,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", PostSchema);