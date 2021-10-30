import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import './Testimonial.css'


const Testimonials = () => {
     return (
          <Container  className="service-container">

               <h4 className="text-color">Choose Your Package</h4>
               <h1>Select Your Best Package <br /> For Your Travel</h1>

               <Row className="testimonial-container">
                    <Col sm={12} md={6} lg={3} >
                         <Card style={{ width: '18rem' }} className="card-color">
                              <Card.Body>
                              <h2><span><i className="fas fa-walking fa-4x text-warning"></i></span></h2>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                         <Card style={{ width: '18rem' }} className="card-color">
                              <Card.Body>
                              <h2><span><i className="fas fa-handshake fa-4x text-warning"></i></span></h2>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                         <Card style={{ width: '18rem' }} className="card-color">
                              <Card.Body>
                              <h2><span><i className="fas fa-users fa-4x text-warning"></i></span></h2>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                         <Card style={{ width: '18rem' }} className="card-color">
                         <h2><span><i className="fas fa-skiing fa-4x text-warning"></i></span></h2>
                              <Card.Body>
                              <Card.Title>Card Title</Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                              <Card.Text>
                                   Some quick example text to build on the card title and make up the bulk of
                                   the card's content.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
               </Row>
          </Container>
     );
};

export default Testimonials;