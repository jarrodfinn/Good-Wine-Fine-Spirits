import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import "./style.css";

function Login() {
  const [formObject, setFormObject] = useState({});
  // const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function loginToken() {
    localStorage.setItem('token', 1);

  }



  return (
    <Container fluid>
      <Row>
        <Col size="md-2">

        </Col>
        <Col size="md-8">
          <Jumbotron>
            <p className="jumboTitle" style={{ marginLeft: "270px" }}>
              <h1>Login</h1>
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
              type="password"
            />

            <Link to="/home">
              <FormBtn disabled={!(storedPassword === formObject.password)}  onClick={loginToken} >
                Login
              </FormBtn>
            </Link>
          </form>
          <a className="navbar-brand navbar-nav mr-auto" href="/signup">
            <h6>Click here to sign up</h6>
          </a>
        </Col>
        <Col size="md-2">

        </Col>
      </Row>
    </Container>
  );
}

export default Login;
