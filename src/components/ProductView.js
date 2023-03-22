import { useState, useEffect, useContext } from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom';
import UserContext from '../UserContext';

import Swal from 'sweetalert2';

export default function ProductView() {

	const { productId } = useParams();

	const { user } = useContext(UserContext);

	const [ name, setName ] = useState("");
	const [ description, setDescription ] = useState("");
	const [ price, setPrice ] = useState(0);

	const navigate = useNavigate();

	const checkout = (productId) => {
		fetch(`http://localhost:4000/users/checkout`, 
		{
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${localStorage.getItem('token')}`
			},
			body: JSON.stringify({
				productId: productId
			})
		})
		.then(res => res.json())
		.then(data => {

			console.log(data);

		if (data === true) {

			Swal.fire ({
				title: "Successfully enrolled",
				icon: 'success',
				text: "You have successfully enrolled for this course."
			});

				navigate("/product");


			} else {

				Swal.fire({
					title: "Something went wrong",
					icon: "error",
					text: "Please try again."
				});
			}
		});
	}

	useEffect(() => {

		fetch(`http://localhost:4000/products/${productId}`)
		.then(res => res.json())
		.then(data => {

			setName(data.name);
			setDescription(data.description);
			setPrice(data.price);
		})
	
	}, [ productId ]);

	return (

		<Container className="mt-5">
			<Row>
				<Col lg={{ span: 5, offset:3}}>
				  <Card className="my-3">
					<Card.Body>
					    <Card.Title>{ name }</Card.Title>
					    <Card.Subtitle>Description:</Card.Subtitle>
					    <Card.Text>{ description }</Card.Text>
					    <Card.Subtitle>Price:</Card.Subtitle>
					    <Card.Text>Php { price }</Card.Text>
					    <Card.Subtitle>Class Schedule</Card.Subtitle>
					    <Card.Text>8 am - 5pm</Card.Text>
					     { user.id !== null ? 
					    	<Button variant="primary" onClick={() => checkout(productId)}>Enroll</Button>
					    	:
					    
					    	<Link className="btn btn-danger btn-block" to="/login">Log in to Enroll</Link>
					     }
					</Card.Body>
				  </Card>
				</Col>
			</Row>
		</Container>

	)
}