import { useState, useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import UserContext from "../UserContext";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

export default function UpdateProduct() {
  const { user } = useContext(UserContext);

  const { productId } = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_URL}/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        name,
        price,
        description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.error) {
          Swal.fire({
            title: "Updating Product Failed",
            icon: "error",
            text: "data.error"
          });
        } else {
          Swal.fire({
            title: "Succesfully updated",
            icon: "success",
            text: "Product has been updated.",
          });
        }
      });

    setName("");
    setPrice("");
    setDescription("");
    setIsActive(false);
  }

  function handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  }

  function validateForm() {
    return name.length > 0 && price.length > 0 && description.length > 0;
  }

  return (
    <Container id="contact2">
      {user.isAdmin ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label id="form">Product Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="price">
            <Form.Label id="form">Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={price}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label id="form">Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={description}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          {validateForm() ? (
            <Button variant="success" type="submit" id="submitBtn">
              Add Product
            </Button>
          ) : (
            <Button variant="danger" type="submit" id="submitBtn" disabled>
              Update Product
            </Button>
          )}
        </Form>
      ) : (
        <h3>Access Denied. Only admins can add products.</h3>
      )}
    </Container>
  );
}