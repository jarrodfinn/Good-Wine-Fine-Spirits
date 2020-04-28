import React from "react";
// import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <a className="navbar-brand" href="/">
        <h3>Good Wine and Fine Spirits</h3>
      </a>
      <br />
      <a className="navbar-brand" href="/create">
        <h6>Create a new entry</h6>
      </a>
      <a className="navbar-brand" href="/items">
        <h6>Inventory List</h6>
      </a>

      {/* <Link to="/create">Create</Link> */}
      <br />
      {/* <Link to="/items">Inventory List</Link> */}
    </nav>
  );
}

export default Nav;
