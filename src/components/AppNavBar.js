
import { useContext } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';

export default function AppNavBar() {

	const { user } = useContext(UserContext);
	
	return(
		<Navbar bg="light" expand="lg">
			<Container fluid>
				<Navbar.Brand as={ Link } to="/">CV E-com Store</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={ NavLink } to="/" >Home</Nav.Link>
						<Nav.Link as={ NavLink } to="/courses" >Products</Nav.Link>
							
							{ (user.id !== null) ?

							<Nav.Link as={ NavLink } to="/logout" >Logout</Nav.Link>
							
							:
							
							<>
								<Nav.Link as={ NavLink } to="/login" >Login</Nav.Link>						
								<Nav.Link as={ NavLink } to="/register" >Register</Nav.Link>	
							</>
							
							}										
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>

	)
}