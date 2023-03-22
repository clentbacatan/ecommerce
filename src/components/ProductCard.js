// import { useState, useEffect } from 'react';

// import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


export default function ProductCard({ product }) {

    const { id, name, description, price } = product;

	return (
		 
         <Card className="my-3">
            <Card.Body>
                <Card.Title>{ name }</Card.Title>
                <Card.Subtitle>Description:</Card.Subtitle>
                <Card.Text>{ description }</Card.Text>
                <Card.Subtitle>Price:</Card.Subtitle>
                <Card.Text>{ price }</Card.Text>
                <Link className="btn btn-primary" to={`/products/${id}`}>Details</Link>
            </Card.Body>
        </Card>

	)
}
