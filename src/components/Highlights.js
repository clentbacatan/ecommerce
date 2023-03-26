import { Row, Col, Card } from 'react-bootstrap';

export default function Highlights() {
	return (
		<Row className="mt-3 mb-3">
			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
			      <Card.Body>
			        <Card.Title>
			        	<h2>Product 1</h2>
			        </Card.Title>
			        <Card.Text>
			          Sample Product 1
			        </Card.Text>
			      </Card.Body>
			    </Card>
			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
			      <Card.Body>
			        <Card.Title>
			        	<h2>Product 2</h2>
			        </Card.Title>
			        <Card.Text>
			         Sample Product 2
			        </Card.Text>
			      </Card.Body>
			    </Card>
			</Col>
			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
			      <Card.Body>
			        <Card.Title>
			        	<h2>Product 2</h2>
			        </Card.Title>
			        <Card.Text>
			          Sample Product 2
			        </Card.Text>
			      </Card.Body>
			    </Card>
			</Col>
		</Row>
	)
}