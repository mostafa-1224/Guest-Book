import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth";
import { Link } from "react-router-dom";
function Navbar() {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.user);

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className="nav-bar">
      <div className="logo">
        <span>Guest Book</span>
      </div>

      {token ? (
        <div className="profile">
          <h3>{user.name}</h3>

          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              cursour: "pointer",
            }}
          >
            Home
          </Link>
          <Link
            onClick={logoutHandler}
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              cursour: "pointer",
            }}
          >
            Logout
          </Link>
        </div>
      ) : (
        <ul>
          <li>
            <Link
              to="/auth"
              style={{
                textDecoration: "none",
                color: "white",
                cursour: "pointer",
              }}
            >
              login
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
