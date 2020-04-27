import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

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
              {item.name} - {item.varietal}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h4>Price: </h4>
            <p>${item.price}</p>
            <h4>Country: </h4>
            <p>{item.country}</p>
            <h4>Wine Label: </h4>
            <p>{item.label}</p>
            <h4>Description: </h4>
            <p>{item.description}</p>
            <h4>Quantity On Hand (bottles): </h4>
            <p>{item.inventory}</p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← Back</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
