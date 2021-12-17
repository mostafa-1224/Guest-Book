import express from "express";
import auth from "../middleware/auth.js";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  addComment,
} from "../controllers/posts.js";

const router = express.Router();

router.get("/", auth, getPosts);
router.post("/", auth, createPost);
router.get("/:id", auth, getPost);
router.patch("/:id", auth, auth, updatePost);
router.post("/:id/comment", auth, addComment);
router.delete("/:id", auth, deletePost);

export default router;
