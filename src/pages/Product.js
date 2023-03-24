import { useEffect, useState } from 'react';

import { Card, CardGroup, Button } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

import { Navigate, useNavigate } from 'react-router-dom';



export default function Product(){

	const [product, setProduct] = useState([]);

	const navigate = useNavigate();

	useEffect(() =>{

		fetch('http://localhost:4000/products')
		.then(res => res.json())
		.then(data => {

		setProduct(data.map(product => {
		
			return(
				<ProductCard key={ product._id } product={ product } />
			);
		}));
	
	  })
	
}, []);
	

	
	return (
	
	<CardGroup>
	      <Card>
	        <Card.Img variant="top" src="holder.js/100px160" />
	        <Card.Body>
	          <Card.Title>Card title</Card.Title>
	          <Card.Text>
	            This is a wider card with supporting text below as a natural lead-in
	            to additional content. This content is a little bit longer.
	          </Card.Text>
	        </Card.Body>
	        <Button variant="primary" type="submit" id="submitBtn">Details</Button>
	      </Card>
	      <Card>
	        <Card.Img variant="top" src="holder.js/100px160" />
	        <Card.Body>
	          <Card.Title>Card title</Card.Title>
	          <Card.Text>
	            This card has supporting text below as a natural lead-in to
	            additional content.{' '}
	          </Card.Text>
	        </Card.Body>
	        <Button variant="primary" type="submit" id="submitBtn">Details</Button>
	      </Card>
	      <Card>
	        <Card.Img variant="top" src="holder.js/100px160" />
	        <Card.Body>
	          <Card.Title>Card title</Card.Title>
	          <Card.Text>
	            This is a wider card with supporting text below as a natural lead-in
	            to additional content. This card has even longer content than the
	            first to show that equal height action.
	          </Card.Text>
	        </Card.Body>
	        <Button variant="primary" type="submit" id="submitBtn">Details</Button>
	      </Card>
	    </CardGroup>

	)
}