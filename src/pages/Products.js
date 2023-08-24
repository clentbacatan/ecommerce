import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';


export default function Product(){

	const [ products, setProduct ] = useState([]);

	useEffect(() => {

		fetch(`${process.env.REACT_APP_API_URL}/products/`)
		.then(res => res.json())
		.then(data => {

			console.log(data);
			
			setProduct(data.map(products => {

				return (
					<ProductCard key={ products._id } product={ products } />
				);
			}));
		})
	}, []);
	
	return (
		<div>
			{ products }
		</div>
	)
}