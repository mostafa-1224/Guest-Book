import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPosts } from "../../store/actions/posts";

import Post from "./Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Link
          to={`/post/${post._id}`}
          style={{
            textDecoration: "none",
            color: "balck",
            cursour: "pointer",
          }}
        >
          <Post key={index} post={post} />
        </Link>
      ))}
    </div>
  );
};

export default Posts;
