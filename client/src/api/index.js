import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};
const url = "http://localhost:5000/posts";
const authUrl = "http://localhost:5000/user";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const comment = (comment, id) =>
  axios.post(`${url}/${id}/comment`, { comment });
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const loginUser = (loginData) =>
  axios.post(`${authUrl}/signin`, loginData);
export const registerUser = (registerData) =>
  axios.post(`${authUrl}/signup`, registerData);
