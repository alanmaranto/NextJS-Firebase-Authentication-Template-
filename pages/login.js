import React, { useState } from "react";
import firebase from "../firebase";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const register = () => {};
  const login = () => {};

  const renderForm = (btnName) => (
    <div className="col-md-6">
      <div className="form-group">
        <label htmlFor="">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="form-control"
        />
        <small>We'll never share your email</small>
      </div>
      <div className="form-group">
        <label htmlFor="">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="form-control"
        />
      </div>

      <div>
        <button className="btn btn-primary" onClick={register}>
          {btnName}
        </button>
      </div>
    </div>
  );

  return (
    <div className="container">
      <h2 className="text-center pt-4 display-4">Login / Register</h2>
      <div className="row">
        {renderForm("Login")} {renderForm("Register")}
      </div>
    </div>
  );
};

export default Login;
