import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, dropPost, updatePost } from "../../store/actions/posts";
function Form() {
  const dispatch = useDispatch();
  var { loadedPost } = useSelector((state) => state.posts);
  var { user } = useSelector((state) => state.user);
  console.log(user, "userFrom Form");
  const [post, setPost] = useState({
    id: "",
    creator: "",
    title: "",
    message: "",
    tags: "",
  });

  useEffect(() => {
    if (loadedPost) {
      console.log(loadedPost, "from useeffed");
      setPost({
        id: loadedPost[0]._id,
        creator: loadedPost[0].creator,
        title: loadedPost[0].title,
        message: loadedPost[0].message,
        tags: loadedPost[0].tags.join(" "),
      });
    }
  }, [loadedPost]);

  const handleInputChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      post.creator === "" ||
      post.title === "" ||
      post.message === "" ||
      post.tags === ""
    )
      return;

    dispatch(
      createPost({ ...post, tags: post.tags.split(" "), userId: user._id })
    );
    handleClear();
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    if (
      post.creator === "" ||
      post.title === "" ||
      post.message === "" ||
      post.tags === ""
    )
      return;

    dispatch(
      updatePost(post.id, {
        ...post,
        tags: post.tags.split(" "),
        userId: user._id,
      })
    );
    handleClear();
  };
  const handleClear = () => {
    dispatch(dropPost());
    setPost({
      creator: "",
      title: "",
      message: "",
      tags: "",
    });
  };
  return (
    <div className="form">
      <form autoComplete="off" onSubmit={handleSubmit}>
        {loadedPost ? <h3>edit post</h3> : <h3>creat a post </h3>}
        <div className=" form-element">
          <label htmlFor="creator">Creator</label>
          <input
            type="text"
            name="creator"
            value={post.creator}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className=" form-element">
          <label htmlFor="title">post title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className=" form-element">
          <label htmlFor="message">post message</label>
          <input
            type="text"
            name="message"
            value={post.message}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className=" form-element">
          <label htmlFor="tags">post tags</label>
          <input
            type="text"
            name="tags"
            value={post.tags}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        {loadedPost ? (
          <button type="button" onClick={handleUpdate}>
            Edit
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default Form;
