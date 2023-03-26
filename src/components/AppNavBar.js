
import { useContext } from 'react';

import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

import UserContext from '../UserContext';

export default function AppNavbar(){

	

	const { user } = useContext(UserContext);

	return (
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand as={ Link } to="/">Shopinas</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={ NavLink } to="/">Home</Nav.Link>
						{ (user.isAdmin) ?

						<>
						<Nav.Link as={ NavLink } to="/admindashboard">Admin Dashboard</Nav.Link>
						<Nav.Link as={ NavLink } to="/addproduct">Create Product</Nav.Link>
						<Nav.Link as={ NavLink } to="/products/all">Retrieve Product</Nav.Link>
						</>
						:
						<Nav.Link as={ NavLink } to="/products">Products</Nav.Link>


						}
						:
						
						{ (user.id !== null) ?
							<>
							<Nav.Link as={ NavLink } to="/logout">Logout</Nav.Link>							
							</>
							:
							<>
								<Nav.Link as={ NavLink } to="/login">Login</Nav.Link>
								<Nav.Link as={ NavLink } to="/register">Register</Nav.Link>
							</>
						}					
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}