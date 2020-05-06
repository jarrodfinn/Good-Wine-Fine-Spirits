import React from "react";
import "./style.css";
// import { Link } from "react-router-dom";
function Nav() {
  function logoutToken() {
    localStorage.setItem('token', 0);

  }


  return (
    
    <nav
      className="navbar navbar-expand-lg navbar-light collapse navbar-collapse border-bottom border-dark"
      // style={{
      //   borderBottom: "35px"
      // }}
    >
      <a className="navbar-brand navbar-nav mr-auto" href="/home" >
        <h3>Good Wine and Fine Spirits</h3>
      </a>
      <br />
      <a className="nav-item navbar-brand" href="/create">
        <h6>Create a new entry</h6>
        <span className="sr-only">(current)</span>
      </a>
      <a className="nav-item navbar-brand" href="/items">
        <h6>
          Inventory List<span className="sr-only">(current)</span>
        </h6>
      </a>
      <a className="nav-item navbar-brand" href="/cart">
        <h6>
          Cart<span className="sr-only">(current)</span>
        </h6>
      </a>
      <a className="nav-item navbar-brand" href="/" onClick={logoutToken}>
        <h6>
          Logout<span className="sr-only">(current)</span>
        </h6>
      </a>

      {/* <Link to="/create">Create</Link> */}
      <br />
      {/* <Link to="/items">Inventory List</Link> */}
    </nav>
  );
}

export default Nav;
