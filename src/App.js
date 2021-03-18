import React from "react";
import classnames from "classnames";
import "./styles.css";

export default function App() {
  const [focusedInputName, setFocusedInputName] = React.useState(null);
  const handleFocus = React.useCallback(
    event => {
      event.preventDefault();
      setFocusedInputName(event.target.name);
    },
    [setFocusedInputName]
  );

  const handleBlur = React.useCallback(
    event => {
      event.preventDefault();
      setFocusedInputName(null);
    },
    [setFocusedInputName]
  );

  return (
    <>
      <img className="wave" alt="background" src="./wave.png" />
      <div className="container">
        <div className="img">
          <img alt="login-background" src="./bg.svg" />
        </div>
        <div className="login-content">
          <form action="index.html">
            <img className="avatar" alt="avatar" src="./avatar.svg" />
            <h2>Welcome</h2>
            <div
              className={classnames("input-div", "one", {
                focus: focusedInputName === "username"
              })}
            >
              <div className="i">
                <i className="fas fa-user" />
              </div>
              <div>
                <h5>Username</h5>
                <input
                  className="input"
                  name="username"
                  type="text"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <div
              className={classnames("input-div", "two", {
                focus: focusedInputName === "password"
              })}
            >
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div>
                <h5>Password</h5>
                <input
                  className="input"
                  name="password"
                  type="password"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
            </div>

            <a href="#reset-password">Forgot Password?</a>
            <input type="submit" className="btn" valut="Login" />
          </form>
        </div>
      </div>
    </>
  );
}
