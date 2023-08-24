import { useEffect, useState } from "react";
import AdminProductCard from "../components/AdminProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {

        setProducts(
          data.map((product) => {
            return <AdminProductCard key={product._id} product={product} />;
          })
        );
      });
  }, []);

  return <div>{products}</div>;
}
  