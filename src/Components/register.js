import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);

  const handleSubmit = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  console.log(name, "name");
  console.log(email, "email");

  return (
    <form>
      <h3>Sign Up</h3>

      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          name="name"
          className="form-control"
          placeholder="Name"
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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

      <button onClick={handleSubmit} className="btn btn-primary btn-block">
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
