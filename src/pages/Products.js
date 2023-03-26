import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';


export default function Product(){

	const [ product, setProduct ] = useState([]);

	useEffect(() => {

		fetch(`http://localhost:4000/products/`)
		.then(res => res.json())
		.then(data => {

			console.log(data);
			
			setProduct(data.map(product => {

				return (
					<ProductCard key={ product._id } product={ product } />
				);
			}));
		})
	}, []);
	
	return (
		<>
			{ product }
		</>
	)
}