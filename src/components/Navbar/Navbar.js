import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import UserContext from "../../context/UserContext/UserContext";
import NoteContext from "../../context/NoteContext/NoteContext";
import "./Navbar.css";

const NavbarComponent = () => {
  const userC = useContext(UserContext);
  const noteC = useContext(NoteContext);

  const [searchInput, setSearchInput] = useState("");

  const inputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const showResults = (e) => {
    e.preventDefault();
    noteC.setSearchInput(searchInput);
  };

  return (
    <>
      {/* <Navbar bg="dark" variant="dark" className="px-3">
        <Navbar.Brand href="/">My Notes App</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </Nav>
        {!localStorage.getItem("token") ? (
          <Nav>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </Nav>
        ) : (
          <Nav>
            <a
              style={{ cursor: "pointer" }}
              className="nav-link"
              onClick={() => userC.signOut()}
            >
              Logout
            </a>
          </Nav>
        )}
      </Navbar> */}
      <nav className="notes-nav">
        <div className="search-bar">
          {/* <i className="fa fa-search" aria-hidden="true"></i>
          <input type="text" placeholder="Search" /> */}
          {!localStorage.getItem("token") ? (
            ""
          ) : (
            <form onSubmit={showResults}>
              <i
                className="fa-solid fa-magnifying-glass"
                onClick={showResults}
              ></i>
              <input
                type="text"
                placeholder="Search"
                value={searchInput}
                onChange={inputHandler}
              />
            </form>
          )}
        </div>
        {!localStorage.getItem("token") ? (
          ""
        ) : (
          <div className="nav-mid">Hi ! {localStorage.getItem("userName")}</div>
        )}
        <div>
          {!localStorage.getItem("token") ? (
            <div className="nav-btns">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </div>
          ) : (
            <div>
              <a
                style={{ cursor: "pointer" }}
                className="nav-link"
                onClick={() => userC.signOut()}
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavbarComponent;
