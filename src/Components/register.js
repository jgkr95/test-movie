import React from "react";

const SignUp = () => {
  const handleSubmit = (data) => {
    console.log(data, "data");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone number"
        />
      </div>

      <div className="form-group">
        <label>Profession</label>
        <select class="custom-select">
          <option selected>Select a Job</option>
          <option value="1">JAVA dev</option>
          <option value="2">REACT dev</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary btn-block">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
