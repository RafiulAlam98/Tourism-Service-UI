import React from 'react';
import { Card, Col, } from 'react-bootstrap';

const UserOrder = (props) => {
     console.log(props.user)
     const {address,email,name,offer} = props.user
     return (
          <Col>
               <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{address}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">{email}</Card.Subtitle>
                    <Card.Text>
                         {offer}
                    </Card.Text>
                    </Card.Body>
               </Card>
          </Col>
     );
};

export default UserOrder;