import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../../store/actions/auth";
function Auth() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);

  const [mood, setMood] = useState(true);
  const [message, setMessage] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [registerData, setRegisterData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginData));
    console.log(loginData, "logingData");
    setLoginData({
      email: "",
      password: "",
    });
    return;
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    console.log(registerData, "registerData");
    if (registerData.password !== registerData.confirmPassword) {
      setRegisterData({
        ...registerData,
        password: "",
        confirmPassword: "",
      });
      setMessage(true);
      return;
    }
    const { email, password, firstName, lastName } = registerData;
    dispatch(register({ email, password, firstName, lastName }));
    setRegisterData({
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    });
    return;
  };

  const switchMood = () => {
    setMood(!mood);

    return;
  };

  return (
    <div>
      {mood && (
        <div className="login">
          <h2>Login</h2>
          <form onSubmit={loginSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                required
                type="text"
                name="email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="password">passowrd</label>
              <input
                required
                type="text"
                name="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
            </div>
            <button type="submit">Login</button>
          </form>

          {token && <Navigate replace={true} to="/" />}
        </div>
      )}
      {!mood && (
        <div className="register">
          <h2>register</h2>
          <form onSubmit={registerSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                required
                type="text"
                name="email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="password">passowrd</label>
              <input
                required
                type="text"
                name="password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="confirm-password">confirm passowrd</label>
              <input
                required
                type="text"
                name="confirm-password"
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="first-name">first name</label>
              <input
                required
                type="text"
                name="first-name"
                value={registerData.firstName}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <label htmlFor="last-name">last name</label>
              <input
                required
                type="text"
                name="last-name"
                value={registerData.lastName}
                onChange={(e) =>
                  setRegisterData({ ...registerData, lastName: e.target.value })
                }
              />
            </div>
            {message && <p>confirm password with the same password</p>}
            <button type="submit">register</button>
          </form>
        </div>
      )}
      {mood ? (
        <p>
          don't have an account ? <span onClick={switchMood}> Register</span>
        </p>
      ) : (
        <p>
          Already Have an account ? <span onClick={switchMood}> Login</span>
        </p>
      )}

      {token && <Navigate replace={true} to="/" />}
    </div>
  );
}

export default Auth;
