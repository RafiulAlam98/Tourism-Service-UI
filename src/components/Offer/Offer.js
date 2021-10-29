import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = (props) => {
     // console.log(props.offer)
     const {community,date,deparature,description,img,location,title,_id,place} = props.offer
     return (
          <Col sm={12} md={6} lg={4}>
               <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                         <Card.Body>
                         <Card.Title>{place}</Card.Title>
                         <Card.Text>
                              {description}
                         </Card.Text>
                         <Link to={`/orders/${_id}`}>
                              <Button variant="primary">Place Orders</Button>
                         </Link>
                         </Card.Body>
                    </Card>
          </Col>
     );
};

export default Offer;