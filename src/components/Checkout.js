


export default function Checkout() {

	return(

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