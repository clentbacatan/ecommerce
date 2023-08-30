import { useState, useEffect, useContext } from 'react';

import { Form, Button } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import UserContext from '../UserContext';

export default function Login() {

	
	const { user, setUser } = useContext(UserContext);	
	const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [isActive, setIsActive] = useState();


	const logInUser = (e) => {

		e.preventDefault();

		fetch('http://localhost:4000/users/checkEmail', {

			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				
				email: email
			
			})
		})
		.then(res => res.json())
		.then(data => {

			if(data === false) {
				Swal.fire({
					title: "No email found",
					icon: "error",
    				text: "Check your login credentials and try again."
				})
			
			} else {

				fetch('http://localhost:4000/users/login', {
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({
						email: email,
						password: password
					})
				})
				.then(res => res.json())
				.then(data => {
					console.log(data)
					if(data) {
						Swal.fire({
							title: "Successfully Login",
							icon: "success",
							text: "Check your login credentials."
						})
					} else {
						Swal.fire({
							title: "Error",
							icon: "error",
							text: "Check your login credentials and try again."
						})
					}
				})
			}
		})
	}
	

	useEffect(() =>{
		
		if(email !== '' && password !== '') {

			setIsActive(true);
		} else {

			setIsActive(false)
		}
	},[email, password])

    return (
			<div className='login-container'>
				<Form onSubmit={(e) => logInUser(e)} className='login-form shadow rounded'>
		        <Form.Group className="p-2" controlId="userEmail">
		            <Form.Label>Email address</Form.Label>
		            	<Form.Control 
		                type="email" 
		                placeholder="Enter email"
		                value={email}
		    			onChange={(e) => setEmail(e.target.value)}
		                required/>
		        </Form.Group>

		        <Form.Group className="p-2" controlId="password">
		            <Form.Label>Password</Form.Label>
		            	<Form.Control 
		                type="password" 
		                placeholder="Password"
		                value={password}
		    			onChange={(e) => setPassword(e.target.value)}
		                required/>
		        </Form.Group>

		        { isActive ? <Button variant="success" type="submit" id="submitBtn" className='m-2'>Submit</Button>
				: 
				<Button variant="danger" type="submit" id="submitBtn" className='m-2' disabled>Submit</Button>
		        }
		    </Form>
			</div>
		    
		)
	}