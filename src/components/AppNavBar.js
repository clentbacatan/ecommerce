
import { useContext } from 'react';

import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

import UserContext from '../UserContext';


export default function AppNavbar(){

	const { user } = useContext(UserContext);

	return (
		<Navbar  expand="md">
			<Container >
					<Navbar.Toggle aria-controls="basic-navbar-nav"/>
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="ms-auto">
								<div className='home-navBar d-flex'>
									<Nav.Link as={ NavLink } to="/login">Login</Nav.Link>
									<Nav.Link as={ NavLink } to="/register">Register</Nav.Link>
								</div>		
							</Nav>
						</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}