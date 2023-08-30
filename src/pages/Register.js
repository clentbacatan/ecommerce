import { useState, useEffect, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Navigate,  useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import UserContext from '../UserContext';

export default function Register(){

	const { user } = useContext(UserContext);
	
	const navigate = useNavigate();


	const [fullName, setfullName] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [password, setPassword] = useState('');


	const [isActive, setIsActive] = useState(true);


	const registerUser = (e) => {

		e.preventDefault();

		fetch('http://localhost:4000/users/checkEmail', {

			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({

				email:email
			})
		
		})
		.then(res => res.json())
		.then(data => {

			if(data === true) {
				Swal.fire({
					title: "Duplicate email found",
					icon: "error",
    				text: "Check your login credentials and try again."
					
				})
			} else {
				
				fetch('http://localhost:4000/users/register', {
					
					method: 'POST',
					headers: {
						'Content-type': 'application/json'
					},
					body: JSON.stringify({

						fullName: fullName,
						email: email,
						password: password
					})

				})
				.then(res => res.json())
				.then(data => {
					if(data === true) {
						
						setfullName('');
						setEmail('');
						setPassword();
					
					Swal.fire({
						title: "Successfully Registered",
						icon: "success",
						text: "Thank you for registering"
					})

						navigate('/login');

					} else {

						Swal.fire({
							title: "Error occur",
							icon: "error",
							text: "Please try again"
						})

					}
				})
			}
		})
	
	}

	useEffect(() => {

	    if((fullName !== '' &&  email !== ''  && password !== '')){
			
			setIsActive(true);
	    
		} else {
	       
			setIsActive(false);
	    }

	}, [fullName, email, password]);

	return(

		<div className='mt-4'>
		<div className='register-logo text-center'>
			<div className='font-weight-bold'>SHOPINAS</div>
		</div>
		<div className='form-container'>
		<Form onSubmit={(e) => registerUser(e)} className='form-head mt-5 p-4 shadow rounded' >
			<Form.Group controlId="firstName" className='m-2'>
			    <Form.Label>Full Name</Form.Label>
			    <Form.Control 
			        type="text" 
			        placeholder="Enter Full Name"
			        value={fullName} 
			        onChange={e => setfullName(e.target.value)}
			        required/>
			</Form.Group>

			{/* <Form.Group controlId="mobileNo" className='m-2'>
	          <Form.Label>Mobile Number</Form.Label>
	          <Form.Control 
	              type="text" 
	              placeholder="Enter Mobile Number"
	              value={mobileNo} 
	              onChange={e => setMobileNo(e.target.value)}
	              required
	          />
	      </Form.Group> */}

	      <Form.Group className="m-2" controlId="userEmail">
	        <Form.Label>Email address</Form.Label>
	        <Form.Control 
	        	type="email" 
	        	placeholder="Enter email"
	        	value={ email }
	        	onChange={e => setEmail(e.target.value)}
	        	required/>
	        <Form.Text className="text-muted">
	          We'll never share your email with anyone else.
	        </Form.Text>
	      </Form.Group>

	      <Form.Group className="m-2" controlId="password1">
	        <Form.Label>Password</Form.Label>
	        <Form.Control 
	        	type="password" 
	        	placeholder="Password"
	        	value={ password }
	        	onChange={e => setPassword(e.target.value)} 
				required/>
	      </Form.Group>
	      
	      {/* <Form.Group className="m-2" controlId="password2">
	        <Form.Label>Verify Password</Form.Label>
	        <Form.Control 
	        	type="password" 
	        	placeholder="Verify Password"
	        	value={ password2 }
	        	onChange={e => setPassword2(e.target.value)}  
	        	required/>
	      </Form.Group> */}

	      	{ isActive ? 
				<Button variant="primary"
					type="submit" 
					id="submitBtn" 
					className='m-2' 
					
					>
					Submit
				</Button>
				:	
				<Button variant="danger"
					type="submit" 
					id="submitBtn" 
					className='m-2' 
					disabled>
					Submit
				</Button>
	  		}
	    </Form>
		</div>
		</div>
		
	)
}