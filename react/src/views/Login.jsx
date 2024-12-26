import React from "react";
import { Link } from "react-router-dom";
import Signup from "./Signup";

export default function Login() {
  const onSubmit = (ev) => {
    ev.preventDefualt();
  };
  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not Registerd? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
