import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

import './Testimonial.css'


const Testimonials = () => {
     return (
          <Container  className="service-container" fluid>

               <Row className="service-container pb-5">
               
                    <div className="mb-5 mt-4">
                         <h4 className="text-color">Why Choose Us?</h4>
                         <h1 className="head-col">Why You Are Travel With <br /> Global Voyages</h1>
                    </div>

                    <Col sm={12} md={6} lg={3} className="mt-2 " >
                         <Card  className="card-color">
                              <Card.Body>
                              <h2><span><i className="fas fa-map-marked fa-4x "></i></span></h2>
                              <Card.Title className="text-dark fw-bold">Travel is Our expertise</Card.Title>
                              <Card.Text>
                              We discuss your travel desires and craft the perfect vacation just for you!
                              Likewise, we listen, suggest, adjust, and understand. We  give you valuable tips before you leave on your vacation!
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="mt-2">
                         <Card  className="card-color">
                              <Card.Body>
                              <h2><span><i className="fas fa-map-pin fa-4x "></i></span></h2>
                              <Card.Title className="text-dark fw-bold">Destination knowledge</Card.Title>
                              <Card.Text>
                              We travel so we can see destinations, resorts, and excursions first hand in order to help our clients make informed decisions on what they can expect.Be raedy for trip with us.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="mt-2">
                         <Card  className="card-color">
                              <Card.Body>
                              <h2><span><i className="fas fa-users fa-4x "></i></span></h2>
                              <Card.Title className="text-dark fw-bold">Convenience</Card.Title>
                              <Card.Text>
                              We know your time is valuable, so we seek out all of the answers to your questions so that you don’t have to waste your precious time researching.You must apply.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="mt-2">
                         <Card  className="card-color">
                         <h2><span><i className="fas fa-donate fa-4x "></i></span></h2>
                              <Card.Body>
                              <Card.Title className="text-dark fw-bold">Cost savings</Card.Title>
                              <Card.Text>
                              We have relationships with tour operators and resorts that can gain our clients better travel perks. We get paid by the tour operators, hoteliers, rental car companies
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="mt-3">
                         <Card  className="card-color">
                         <h2><span><i className="fab fa-accessible-icon fa-4x "></i></span></h2>
                              <Card.Body>
                              <Card.Title className="text-dark fw-bold">Relationships</Card.Title>
                              <Card.Text>
                              Travel agents are not a search engine or an anonymous voice from a call center. we are professionals who happen to love travel and who truly care.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="mt-3">
                         <Card  className="card-color">
                         <h2><span><i className="fas fa-people-carry fa-4x "></i></span></h2>
                              <Card.Body>
                              <Card.Title className="text-dark fw-bold">Travel Assistance</Card.Title>
                              <Card.Text>
                              The Internet doesn’t call you back, but we do! During times of crisis (hurricanes, Covid-19, etc.), you make one call, text or email and we handle the rest.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={3} className="mt-3">
                         <Card  className="card-color">
                         <h2><span><i className="fas fa-skiing fa-4x"></i></span></h2>
                              <Card.Body>
                              <Card.Title className="text-dark fw-bold">Decreased Stress</Card.Title>  
                              <Card.Text>
                              You can start your vacation with peace of mind knowing every detail has been accounted for. you can focus on the fun knowing that your agent has handled everything !
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
               </Row>
          </Container>
     );
};

export default Testimonials;