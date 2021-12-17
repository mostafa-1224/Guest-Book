import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  ADD_COMMENT,
  LOAD,
  DROP,
} from "../constants/types";

export default (state = { posts: [], loadedPost: null }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...state, posts: action.payload };

    case LOAD:
      return {
        ...state,
        loadedPost: state.posts.filter((post) => post._id === action.payload),
      };
    case DROP:
      return {
        ...state,
        loadedPost: null,
      };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    default:
      return state;
  }
};
