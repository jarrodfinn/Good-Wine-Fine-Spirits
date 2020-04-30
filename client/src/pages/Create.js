import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Items() {
  // Setting our component's initial state
  const [items, setItems] = useState([]);
  const [formObject, setFormObject] = useState({});

  // Load all items and store them with setitems
  useEffect(() => {
    loadItems();
  }, []);

  // Loads all items and sets them to items
  function loadItems() {
    API.getItems()
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveitem method to save the item data
  // Then reload items from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(formObject);
    if (formObject.name && formObject.category) {
      API.saveItem({
        name: formObject.name,
        category: formObject.category,
        varietal: formObject.varietal,
        origin: formObject.origin,
        country: formObject.country,
        region: formObject.region,
        price: formObject.price,
        inventory: formObject.inventory,
        description: formObject.description,
        date: formObject.date,
      }).then((res) => loadItems())
    //   console.log(formObject.name);
      .catch((err) => console.log(err));
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-7">
          <Jumbotron>
            <h1>What wines would you like to add into inventory?</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="name"
              placeholder="Name (required)"
            />
            <Input
              onChange={handleInputChange}
              name="category"
              placeholder="Category (required)"
            />
            <Input
              onChange={handleInputChange}
              name="varietal"
              placeholder="Varietal (required)"
            />
            <Input
              onChange={handleInputChange}
              name="origin"
              placeholder="Continent (required)"
            />
            <Input
              onChange={handleInputChange}
              name="country"
              placeholder="Country (required)"
            />
            <Input
              onChange={handleInputChange}
              name="region"
              placeholder="Region (required)"
            />
            <Input
              onChange={handleInputChange}
              name="price"
              placeholder="Price (required)"
            />
            <Input
              onChange={handleInputChange}
              name="inventory"
              placeholder="Inventory Amount (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="description"
              placeholder="Description (required)"
            />
            <FormBtn
              disabled={!(formObject.name && formObject.varietal)}
              onClick={handleFormSubmit}
            >
              Submit Wine
            </FormBtn>
          </form>
        </Col >
        <Col size="md-5">
        <Jumbotron>
            <h1>Inventory</h1>
          </Jumbotron>
          {items.length ? (
            <List>
              {items.map((item) => (
                <ListItem key={item._id}>
                  <Link to={"/items/" + item._id}>
                    <em>
                      {item.name} - {item.varietal} - ${item.price}
                    </em>
                  </Link>
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Items;
