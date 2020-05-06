import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import "./style.css";

function Signup() {
  const [formObject, setFormObject] = useState({});
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function setLogin() {
    localStorage.setItem('username', formObject.username);
    localStorage.setItem('password', formObject.password);
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-2">
          {" "}
          <img
            style={{
              height: "600px",
              width: "300px",
            }}
            src={require("../images/outline-black-bottle.jpg")}
            alt="wine"
          />
        </Col>
        <Col size="md-8">
          <Jumbotron>
            <p className="jumboTitle" style={{ marginLeft: "270px" }}>
              <h1>Sign Up</h1>
            </p>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="username"
              placeholder="Username (required)"
            />
            <Input
              onChange={handleInputChange}
              name="password"
              placeholder="Password (required)"
            />

            <Link to="/">
              <FormBtn disabled={!(formObject.username && formObject.password)} onClick={setLogin}>
                Signup
              </FormBtn>
            </Link>
          </form>
          <a className="navbar-brand navbar-nav mr-auto" href="/home">
        <h6>Click here to sign up</h6>
      </a>
        </Col>
        <Col size="md-2">
          <img
            style={{
              height: "600px",
              width: "300px",
            }}
            src={require("../images/outline-black-bottle.jpg")}
            alt="wine"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
