import React from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

import Home from "./components/home/Home";
import Auth from "./components/auth/Auth";
import PostDetails from "./components/Posts/postDetails/PostDetails";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/post/:id"
          element={
            <PrivateRoute>
              <PostDetails />
            </PrivateRoute>
          }
        />
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
    </Router>
  );
};

export default App;
