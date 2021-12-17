import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../store/actions/posts";

function PostDetails({ props }) {
  const [comment, setComment] = useState("");
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = posts.find((post) => post._id === id);

  const commentHandler = () => {
    dispatch(addComment(comment, post._id));
    setComment("");
  };
  return (
    <div>
      <h1>Creator {post.creator}</h1>
      <p>created At {post.createdAt}</p>
      <p>Message {post.message}</p>
      <p>tags : {post.tags.map((tag) => `#${tag} `)}</p>
      <h3>{post.comments.length} Comments</h3>
      {post.comments.map((com) => (
        <p>{com}</p>
      ))}
      <textarea
        name="new-comment"
        cols="30"
        rows="10"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <button onClick={commentHandler}>add comment</button>
    </div>
  );
}

export default PostDetails;
