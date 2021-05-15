import React from "react";

const Form = ({
  email,
  password,
  setEmail,
  setPassword,
  btnName,
  handleSubmit,
}) => (
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
      <button className="btn btn-primary" onClick={() => handleSubmit}>
        {btnName}
      </button>
    </div>
  </div>
);

export default Form;
