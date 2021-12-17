import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LOAD,
  DROP,
  ADD_COMMENT,
} from "../constants/types";

import * as api from "../../api/index.js";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const loadPost = (id) => {
  console.log(id, "id");
  return { type: LOAD, payload: id };
};
export const dropPost = () => {
  return { type: DROP };
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const addComment = (comment, id) => async (dispatch) => {
  console.log(comment, id, "from addComment");
  try {
    const { data } = await api.comment(comment, id);
    console.log(data, "updated post ");
    dispatch({ type: ADD_COMMENT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
