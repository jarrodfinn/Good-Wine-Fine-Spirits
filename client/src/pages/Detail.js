import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import * as images from "../images"

function Detail(props) {
  const [item, setItem] = useState({});

  // When this component mounts, grab the item with the _id of props.match.params.id
  const { id } = useParams();
  useEffect(() => {
    API.getItem(id)
      .then((res) => setItem(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              <i>
              {item.name} - {item.varietal} - {item.inventory} bottles
              </i>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <div className="container">
            <div className="row row-cols-3">
              <div className="col">
                <h4>Price: </h4>
                <p>${item.price}</p>
              </div>

              <div className="col">
                <h4>Country: </h4>
                <p>{item.country}</p>
              </div>
              <div className="col">
                <h4>Quantity On Hand (bottles): </h4>
                <p>{item.inventory}</p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="row row-cols-3">
              <div className="col">
                <h4>Wine Label: </h4>
                <p>{item.label}</p>
              </div>
              <div className="col">
                <h4>Description: </h4>
                <img alt="wine" src={images[item.photo]} />
              </div>
            </div>
          </div>

        </Col>
      </Row>
      <br />
      <br />

      <Row>
        <Col size="md-2">
          <Link to="/items">← Back</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
