import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import UserContext from "../UserContext";

export default function ProductView() {
  const { productId } = useParams();
  const { user } = useContext(UserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = (productId) => {
    const userId = user.id;
    const productName = name;

    fetch(`${process.env.REACT_APP_API_URL}/users/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        productId: productId,
        userId: userId,
        productName: productName,
        quantity: quantity
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data) {
          Swal.fire({
            title: "Successfully",
            icon: "success",
            text: "You have successfully purchase.",
          });
        } else {
          Swal.fire({
            title: "Something went wrong",
            icon: "error",
            text: "Please try again.",
          });
        }
      });
  };

  useEffect(() => {
    console.log(productId);

    fetch(`http://localhost:4000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
      });
  }, [productId]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div id="checkout">
      <div className="mt-5">
        <div className="my-3">
          <h3 className="title">{name}</h3>
          <h5 className="mb-3 text-muted">Description:</h5>
          <p>{description}</p>
          <h5 className="mt-3">Price:</h5>
          <p className="mb-3 font-weight-bold">Php {price}</p>
          <h5 className="mt-3">Quantity:</h5>
          <div className="input-group mb-3">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleDecrement}
            >
              -
            </button>
            <input
              type="number"
              className="form-control text-center"
              value={quantity}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <h5 className="mt-3">Subtotal:</h5>
          <p className="mb-3 font-weight-bold">Php {price * quantity}</p>
          {user.id !== null ? (
            <div className="text-center">
              <button
                className="btn btn-primary btn-block"
                onClick={() => product(productId)}
              >
                Checkout
              </button>
            </div>
          ) : (
            <Link className="btn btn-danger btn-block" to="/login">
              Buy now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}