import React, { useState } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

function Login() {
    const [formObject, setFormObject] = useState({});
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    return (
      <Container fluid>
        <Row>
          <Col size="md-2">
            {" "}
            <img
              style={{
                height: "705px",
                width:"250px"
              }}
              src={require("../images/wine.jpg")}
              alt="wine"
            />
          </Col>
          <Col size="md-8">
            <Jumbotron>
              <h1>Login</h1>
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

              <Link to="/home">
                <FormBtn
                  disabled={!(formObject.username && formObject.password)}
                >
                  Login
                </FormBtn>
              </Link>
            </form>
          </Col>
          <Col size="md-2">
            <img
              style={{
                height: "705px",
                width:"250px"
              }}
              src={require("../images/wine.jpg")}
              alt="wine"
            />
          </Col>
        </Row>
      </Container>
    );
}

export default Login;
