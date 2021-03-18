import React from "react";
import classnames from "classnames";
import "./styles.css";

export default function App() {

  return (
    <>
      <img className="wave" alt="background" src="./wave.png" />
      <div className="container">
        <div className="img">
          <img src="./male.png" />
        </div>
        <div className="login-content">
          <form className="card-login">
            <img className="avatar" alt="avatar" src="./logo.png" />
            <h2>Welcome</h2>
              <div className="i">
                <i className="fas fa-lock" />
              </div>
              <div>
                <h5>Password</h5>
              </div>
              <div className="buttons-login">
              <button className="btn-microsoft">
              <img className="btn-logo" src="./microsoft.png" />
                </button>
                <button className="btn-google">
              <img className="btn-logo" src="./google.png" />
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
