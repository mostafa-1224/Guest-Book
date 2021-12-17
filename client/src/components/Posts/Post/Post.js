import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPost, deletePost } from "../../../store/actions/posts";
const Post = ({ post }) => {
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { creator, title, message, tags, createdAt, _id, userId } = post;
  console.log(state.user._id, userId);
  const editHandler = () => {
    dispatch(loadPost(_id));
  };
  const deleteHandler = () => {
    dispatch(deletePost(_id));
  };
  return (
    <div className="post-container">
      <h2>created by : {creator}</h2>
      <h3>Title {title}</h3>
      <p>Message {message}</p>
      <p>tags : {tags.map((tag) => `#${tag} `)}</p>
      {state.user._id === userId && (
        <>
          <button onClick={editHandler}>Edit</button>
          <button onClick={deleteHandler}>delete</button>
        </>
      )}
      <p>created {createdAt}</p>
    </div>
  );
};

export default Post;
