import { Table, Button } from 'react-bootstrap';

import UserContext from '../UserContext';

import { useState, useEffect, useContext } from 'react';

import Swal from 'sweetalert2';


export default function AdminDashboard() {

	const [isActive, setIsActive] = useState(false)

	return (

		<Table striped bordered hover size="sm">
		      <thead>
		        <tr>
		          <th>Name</th>
		          <th>Description</th>
		          <th>Price</th>
		          <th>Availability</th>
		         <th>Edit</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <td>Product 1</td>
		          <td>Product Description 1</td>
		          <td>500</td>
		          <td>Available</td>
		          { isActive ?
		          <Button variant="primary" type="submit" id="submitBtn">Activate</Button>
		          :
		          <Button variant="primary" type="submit" id="submitBtn" disabled>Deactivate</Button>
		          }
		        </tr>
		        <tr>
		          <td>Product 2</td>
		          <td>Product Description 2</td>
		          <td>800</td>
		          <td>Available</td>
		          <Button variant="primary" type="submit" id="submitBtn">Activate</Button>
		          <Button variant="primary" type="submit" id="submitBtn">Archive</Button>
		        </tr>
		        <tr>
		          <td>Product 3</td>
		          <td>Product Description 3</td>
		          <td>1000</td>
		          <td>Available</td>
		          <Button variant="primary" type="submit" id="submitBtn">Activate</Button>
		          <Button variant="primary" type="submit" id="submitBtn">Archive</Button>
		        </tr>
		      </tbody>
		    </Table>
		)


    }