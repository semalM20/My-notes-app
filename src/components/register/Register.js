import React, { useState, useContext } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext/UserContext";
import userImg from "../user.png";

const Register = () => {
  const userC = useContext(UserContext);
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    userC.addUser(user);
  };

  return (
    // <Container className="mt-5 shadow-sm p-5">
    //   <h1 className="mb-3 text-center">Register</h1>
    //   <Form>
    //     <Form.Group className="mb-3">
    //       <Form.Label>Name</Form.Label>
    //       <Form.Control
    //         type="text"
    //         placeholder="Enter Your Name"
    //         name="name"
    //         value={user.name}
    //         onChange={inputHandler}
    //       />
    //     </Form.Group>
    //     <Form.Group className="mb-3">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control
    //         type="email"
    //         placeholder="Enter email"
    //         name="email"
    //         value={user.email}
    //         onChange={inputHandler}
    //       />
    //     </Form.Group>

    //     <Form.Group className="mb-3">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control
    //         type="password"
    //         placeholder="Password"
    //         name="password"
    //         value={user.password}
    //         onChange={inputHandler}
    //       />
    //     </Form.Group>

    //     <Button variant="primary" type="submit" onClick={register}>
    //       Register
    //     </Button>
    //   </Form>
    // </Container>
    <div className="login-container" style={{ height: "100vh" }}>
      <div className="login-header">
        <h1>Create a New Account</h1>
        <h2>
          Or <b>login</b> if already registered.
        </h2>
      </div>
      <div className="login-card">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your Name"
          name="name"
          value={user.name}
          onChange={inputHandler}
        />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={user.email}
          onChange={inputHandler}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={user.password}
          onChange={inputHandler}
        />
        <div className="login-buttons">
          <button className="primary-btn" onClick={register}>
            Sign Up
          </button>
          <NavLink className="secondary-btn" to="/login">
            Already Registered ?
          </NavLink>
        </div>
        <div className="logincard-img">
          <img src={userImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
