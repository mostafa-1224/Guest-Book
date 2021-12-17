import { combineReducers } from "redux";

import posts from "./postsReducers";
import user from "./userReducer";

export const reducers = combineReducers({ posts, user });
