import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  title: String,
  message: String,
  creator: String,
  tags: [String],
  comments: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const posts = mongoose.model("posts", postSchema);

export default posts;
