import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UpdateProductCard({ product }) {
  const { _id, name, description, price, isActive } = product;
  const [isProductActive, setIsProductActive] = useState(isActive);

  const handleClick = () => {
    fetch(`http://localhost:4000/products/${_id}/archive`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        isActive: !isProductActive,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsProductActive(!isProductActive);
      })
      .catch((error) => {
        console.log("Error product:", error);
      });
  };

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle>Description:</Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Card.Subtitle>Price:</Card.Subtitle>
          <Card.Text>{price}</Card.Text>
          <Link className="btn btn-primary mr-2" to={`/product/${_id}`}>
            Update
          </Link>{" "}
          <Button
            variant={isProductActive ? "success" : "danger"}
            onClick={handleClick}
          >
            {isProductActive ? "Active" : "Inactive"}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}