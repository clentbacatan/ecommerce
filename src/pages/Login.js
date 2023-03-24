import { Button, Form } from 'react-bootstrap';
import UserContext from '../UserContext';
import { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';



export default function Login() {

	const { user, setUser } = useContext(UserContext);
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isActive, setIsActive] = useState(false)

	const [registerSuccess, setRegisterSuccess] = useState(false)



	function logInUser(e) {

		e.preventDefault();
		
		fetch('http://localhost:4000/users/login',
		{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
			})

		})
		.then(res => res.json())
		.then(data => {
			
			if(typeof data.access !== "undefined") {

				localStorage.setItem('token', data.access);
				retrieveUserDetails(data.access);

				Swal.fire({
					title: "Login Successful",
					icon: "success",
					text: "Welcome to Zuitt!"
				});
			
			} else {

				Swal.fire({
					title: "Authentication Failed",
					icon: "error",
					text: "Check your login credentials and try again."
				});
			}
		});
			
			setEmail('');
			setPassword('');
		
		}
		
		const retrieveUserDetails = (token) => {
				
				fetch('http://localhost:4000/users/details', {
					headers: {
						Authorization: `Bearer ${ token }`
					}
				})
				 .then(res => res.json())
				 .then(data => {

				 	setUser({

				 		id: data._id,
				 		isAdmin: data.isAdmin
				 	});
				 })
			};

		useEffect(() => {


			if(email !== '' && password !== '') {

				setIsActive(true);
			
			} else {

				setIsActive(false);
			}


		}, [ email, password ]);

	
		return registerSuccess !== false ? (
			
			<Navigate to="/products"/>
		)
			:
		(

			 <Form onSubmit={ logInUser }>
			      <Form.Group className="mb-3" controlId="userEmail">
			        <h3>Login</h3>
			        <Form.Label>Email address</Form.Label>
			        <Form.Control 
			        type="email" 
			        placeholder="Enter email" 
			        value= {email} 
			        onChange={ e => setEmail(e.target.value) }  />
			      </Form.Group>

			      <Form.Group className="mb-3" controlId="userPassword">
			        <Form.Label>Password</Form.Label>
			        <Form.Control 
			        type="password"
			        placeholder="Password" 
			        value= {password}
			        onChange={ e => setPassword(e.target.value) }/>
			      </Form.Group>
			      
			      { isActive ?

			      <Button variant="success" type="submit">
			        Login
			      </Button>
			      :
			      <Button variant="success" type="submit" disabled>
			        Login
			      </Button>

			      }	     
		     </Form>
		)
	}