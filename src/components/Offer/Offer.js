import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Offer.css'


const Offer = (props) => {
     // console.log(props.offer)
     const {img,title,_id,place,cost,rating} = props.offer
     return (
          <Col sm={12} md={6} lg={4} className="offer-container">
               <Card >
                    <Card.Img className="img-fluid" variant="top" src={img} />
                         <Card.Body >
                              <div className="d-flex  justify-content-between">
                                   <h6 className="text-color">{cost} <span>/Per Person</span></h6>
                                   <p>Rating: <span className="text-color">{rating} out of 5</span> </p>
                              </div>
                              <h3 className="text-warning">{title}</h3>
                              <h4  className="text-info">{place}</h4>
                         </Card.Body>

                         <Link to={`/orders/${_id}`}>
                                   <Button variant="secondary" >Place Orders</Button>
                              </Link>
                    </Card>
          </Col>
     );
};

export default Offer;