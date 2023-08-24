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

	// function authenticate(e) {
    //     	e.preventDefault();
    //     fetch(`${process.env.REACT_APP_API_URL}/users/login`,
    //     {
    //     	method: 'POST',
    //     	headers: {
    //     		'Content-Type': 'application/json'
    //     	},
    //     	body: JSON.stringify({
    //     		email: email,
    //     		password: password
    //     	})
    //     })
    //     .then(res => res.json())
    //     .then(data => {    
        	
	// 		console.log(data);
	
    //     	if(typeof data.access !== "undefined") {

    //     		localStorage.setItem('token', data.access);
    //     		retrieveUserDetails(data.access);

    //     		Swal.fire({
    //     			title: "Login Successful",
    //     			icon: "success",
    //     			text: "Welcome to Zuitt!"
    //     		});
        		
	// 		} else {

    //     		Swal.fire({
    //     			title: "Authentication Failed",
    //     			icon: "error",
    //     			text: "Check your login credentials and try again."
    //     		});
    //     	}
    //     });
    //     setEmail('');
    //     setPassword('');    
    // }

    // const retrieveUserDetails = (token) => {

    // 	fetch(`${process.env.REACT_APP_API_URL}/users/details`, {
    // 		headers: {
    // 			Authorization: `Bearer ${ token }`
    // 		}
    // 	})
    // 	.then(res => res.json())
    // 	.then(data => {
    		
	// 		console.log(data);	
    		
	// 		setUser({
    // 			id: data._id,
    // 			isAdmin: data.isAdmin
    // 		})
    // 	})
    // };


        

        // access the localstorage
	

	useEffect(() => {
        const email1 = localStorage.getItem('email');
        const password1 = localStorage.getItem('password');
        let savedPass = atob(password1);

        if(email === email1 && password === savedPass ){
            setIsActive(true);
        } else {
            setIsActive(false);
        }

    }, [email, password]);

    return (
			<div className='login-container'>
				<Form className='login-form shadow rounded'>
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