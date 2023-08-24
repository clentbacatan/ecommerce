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
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState('');

	const [isActive, setIsActive] = useState(true);


	async function registerUser(e) {

		e.preventDefault();

		await fetch()
		.then(response => response.json())


	}


	function handleSubmit() {

		navigate('/login');
		Swal.fire({
			title: "Successfully Registered",
			icon: "success",
		});
		localStorage.setItem('password', btoa(password2));
		localStorage.setItem('email', email);
		


	}


	useEffect(() => {

	    if((fullName !== '' &&  email !== '' && mobileNo.length === 11 && password1 !== '' && password2 !== '') && (password1 === password2)){
			
			setIsActive(true);
	    
		} else {
	       
			setIsActive(false);
	    }

	}, [fullName, email, mobileNo, password1, password2]);

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

			<Form.Group controlId="mobileNo" className='m-2'>
	          <Form.Label>Mobile Number</Form.Label>
	          <Form.Control 
	              type="text" 
	              placeholder="Enter Mobile Number"
	              value={mobileNo} 
	              onChange={e => setMobileNo(e.target.value)}
	              required
	          />
	      </Form.Group>

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
	        	value={ password1 }
	        	onChange={e => setPassword1(e.target.value)} 
				required/>
	      </Form.Group>
	      
	      <Form.Group className="m-2" controlId="password2">
	        <Form.Label>Verify Password</Form.Label>
	        <Form.Control 
	        	type="password" 
	        	placeholder="Verify Password"
	        	value={ password2 }
	        	onChange={e => setPassword2(e.target.value)}  
	        	required/>
	      </Form.Group>

	      	{ isActive ? 
				<Button variant="primary"
					type="submit" 
					id="submitBtn" 
					className='m-2' 
					onClick={handleSubmit}>
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