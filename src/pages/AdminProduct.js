import { useEffect, useState } from "react";
import AdminProductCard from "../components/AdminProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setProducts(
          data.map((product) => {
            return <AdminProductCard key={product._id} product={product} />;
          })
        );
      });
  }, []);

  return <>{products}</>;
}
  


// import { useEffect, useState } from 'react';
// import AdminProductCard from '../components/AdminProductCard';

// export default function Product(){

// 	const [ product, setProduct ] = useState([]);

// 	useEffect(() => {

// 		fetch(`http://localhost:4000/products/all`, {
// 			 headers: {
//         	 Authorization: `Bearer ${localStorage.getItem("token")}`,
//          },
// 		})
// 		.then(res => res.json())
// 		.then(data => {

// 			console.log(data);
			
// 			setProduct(data.map(product => {

// 				return (
// 					<AdminProductCard key={product.id} product={product} />
// 				);
// 			}));
// 		})
// 		.catch(error => console.log(error));
// 	}, []);
	
// 	return (
// 		<>
// 			{product.map(product => (
// 				<AdminProductCard key={product.id} product={product} />
// 			))}
// 		</>
// 	);
// }