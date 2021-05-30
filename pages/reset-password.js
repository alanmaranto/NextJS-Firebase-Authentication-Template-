import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase";
import { useRouter } from "next/router";
import { UserContext } from "../context/user/index";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {};

  return (
    <div className="container col-md-6 offset-md-3 p-5">
      <h2>Rset Password</h2>
      <p className="lead">
        If you have already registered, you can enter your email address to
        receive a password reset link
      </p>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Type your email"
          autoFocus
        />
        <br />
        <button className="btn btn-primary" disabled={!email || loading}>
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
