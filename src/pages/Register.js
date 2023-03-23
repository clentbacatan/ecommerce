import { Form, Button } from 'react-bootstrap';

import UserContext from '../UserContext';

import { Navigate, useNavigate } from 'react-router-dom';

import { useState, useEffect, useContext } from 'react';

import Swal from 'sweetalert2';

export default function Register() {


	const { user } = useContext(UserContext);
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [firstName, setFirstName] = useState ('');
	const [lastName, setLastName] = useState ('');


	const [isActive, setIsActive] = useState(false);

	const [ registerSuccess, setRegisterSuccess ] = useState(false);

		function registerUser(e) {
			e.preventDefault();


			fetch('http://localhost:4000/users/checkEmail',
			{
				method: "POST",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: email
				}),

			})
			.then((res) => res.json())
			.then((data) => {

				if(data === true) {
					Swal.fire({
						title: "Authentication Failed",
						icon: "error",
						text: "Email already exists"
					});
					
				} else {

					fetch('http://localhost:4000/users/register', {

						method: "POST",
						headers: {
							"Content-Type": "application/json",

						},
						body: JSON.stringify({
							firstName: firstName,
							lastName: lastName,
							email: email,
							mobileNumber: mobileNumber,
							password: password1
						})

				}).then((res) => res.json())
				  .then((data) => {

				  	if(data === true) {
				  
				  		setEmail('');
						setPassword1('');
						setPassword2('');
						setFirstName("");
						setLastName("");
						setMobileNumber("");


				   Swal.fire({
						title: "Successfully Registered",
						icon: "success",
						text: "Please login!"
			
					});
				  	
				  	navigate("/login")
				  
				  } else {

					Swal.fire({
						title: "Registration failed",
						icon: "error",
						text: "please make sure you have registered."
					});
				}
			}).catch((error) => console.log(error))
		} 
	 })
		}


		useEffect(() => {
			
			if((firstName !== '' && lastName !== '' && email !== '' && password1 !== '' && password2 !== '' && mobileNumber.length >= 11) && (password1 === password2)) {

				setIsActive(true);
			
			} else {

				setIsActive(false);
			}

		}, [email, password1, password2, firstName, lastName, mobileNumber]);

	
	return registerSuccess !== false ? (
			
			<Navigate to="/login"/>
		)
			:
		(

		<Form onSubmit={(e) => registerUser(e)}>
            <Form.Group className="mb-3" controlId="userFirstName">
  	  	        <Form.Label>First Name</Form.Label>
  	  	        <Form.Control
  	  	         type="firstName" 
  	  	         placeholder="Enter first name"
  	  	         value={ firstName }
  	  	         onChange={e => setFirstName(e.target.value)}
  	  	         required />
            </Form.Group>
                <Form.Group className="mb-3" controlId="userLastName">
            	  <Form.Label>Last Name</Form.Label>
            	   <Form.Control
            	  type="lastName" 
            	  placeholder="Enter last name"
            	  value={ lastName }
            	  onChange={e => setLastName(e.target.value)}
            	  required />
                  </Form.Group>
		      <Form.Group className="mb-3" controlId="userEmail">
		        <Form.Label>Email address</Form.Label>
		        <Form.Control 
		        type="email" 
		        placeholder="Enter email"
		        value={ email }
		        onChange={e => setEmail(e.target.value)}
		        required />
		      </Form.Group>
		        <Form.Group className="mb-3" controlId="mobileNumber">
		      	   <Form.Label>Mobile Number</Form.Label>
		      	    <Form.Control
		      	 type="string" 
		      	 placeholder="Mobile Number"
		      	 value={ mobileNumber }
		      	 onChange={e => setMobileNumber(e.target.value)}
		      	 required />
		            </Form.Group>
		      <Form.Group className="mb-3" controlId="password1">
		        <Form.Label>Password</Form.Label>
		        <Form.Control 
		        type="password"
		        placeholder="Password"
		        value={ password1 }
		        onChange={e => setPassword1(e.target.value)}
		        required />
		      </Form.Group>
		      <Form.Group className="mb-3" controlId="password2">
		        <Form.Label>Verify Password</Form.Label>
		        <Form.Control 
		        type="password" 
		        placeholder="Verfiy Password"
		        value={ password2 }
		        onChange={e => setPassword2(e.target.value)}
		        required />
		      </Form.Group>

		         { isActive ? 

		      	   <Button variant="primary" type="submit" id="submitBtn">
		      		  Submit
		      	   </Button>
		      	   :
		      	   <Button variant="danger" type="submit" id="submitBtn" disabled>
		      	     Submit
		      	   </Button>
		         }   
		</Form>

	)
}