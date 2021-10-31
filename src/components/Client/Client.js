import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Client = () => {
     return (
          <Container  fluid className="service-container">
               <Row  className="pb-5">


                    <div className=" mt-4 mb-4">
                         <h4 className="text-color">Why Choose Us?</h4>
                         <h1 className="head-col">Why You Are Travel With <br /> Global Voyages</h1>
                    </div>

                    <Col sm={12} md={6} lg={4}>
                         <Card className="service-container head-col">
                              <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/LSJMJ44/248916367-436038871493716-7179276679134051890-n.jpg?fbclid=IwAR1tOq1HV2bG5VrCFAxFX5He-VYbiHKrGv41qL6ojzoTymRramodANxffx0" />
                              <Card.Body>
                              <Card.Title className="fw-bold">Dina James</Card.Title>
                              <Card.Subtitle>Traveller</Card.Subtitle>
                              <Card.Text className="text-primary mt-3">
                              We had a fantastic time in Japan. The itinerary and excursions organised were perfect, and we got to experience so much of Japan in two weeks - covering all the key cities and sights that we wanted to see .
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                         <Card className="service-container head-col">
                              <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/g74xFb2/248874576-858110001561438-818790565069643559-n.jpg?fbclid=IwAR1GubXgXfWfBmtEHKyiNILs7uhYJ8B98bTpg_Qlb_ez33gIkYi6jolL5wU" />
                              <Card.Body>
                              <Card.Title className="fw-bold">Angela Gordan</Card.Title>
                              <Card.Subtitle>Traveller</Card.Subtitle>
                              <Card.Text className="text-primary mt-3">
                              The destinations were all very good. There were so many highlights it's hard to list them all but seeing Mount Fuji was incredible, experiencing the history of Kyoto and the beautiful Island.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                         <Card className="service-container head-col">
                              <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/DLrVHd3/248896545-408468834068628-5038033021610698862-n.jpg?fbclid=IwAR0Kxsp40K-q-ekr-fFG_yihBb7LYpMk2SGb2_sPKDZPgIFB_SWbCynCIdw" />
                              <Card.Body>
                              <Card.Title className="fw-bold">Jahid Hassan</Card.Title>
                              <Card.Subtitle>Traveller</Card.Subtitle>
                              <Card.Text className="text-primary mt-3">
                              Japan has so many terrific places. There's so much to see and explore. The local agency was incredibly helpful from designing the itinerary to providing support whilst we were travelling - from directions
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                         <Card className="service-container head-col">
                              <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/z4RYW7R/248072277-1537311619963405-7125568117990201045-n.jpg?fbclid=IwAR2_5x5jY87UgyB4DsG_NG_hv4x-oFQnZdQrwV1d4BS57VZV4khfLSFn_5o" />
                              <Card.Body>
                              <Card.Title className="fw-bold">Shawn Paul</Card.Title>
                              <Card.Subtitle>Traveller</Card.Subtitle>
                              <Card.Text className="text-primary mt-3">
                              Without the local travel agency and their knowledge of Japan, we wouldn’t have been able to see and experience Japanese history and culture within 2 weeks. Would highly recommend the travel agency.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                         <Card className="service-container head-col">
                              <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/9Hj7NyQ/248921224-2193517717456419-4129710935814403706-n.jpg?fbclid=IwAR1JcLj0TDCqWGQJl1iTL_ZfttpcjfXCrzChEmavm-LptVYT6jewdbhCmz8" />
                              <Card.Body>
                              <Card.Title className="fw-bold">Juina Beli</Card.Title>
                              <Card.Subtitle>Traveller</Card.Subtitle>
                              <Card.Text className="text-primary mt-3">
                              The whole trip designed by the travel agent was really perfect. We could enjoy different sides of Bhutan, from the fast changing cities of Paro and Thimphu to the traditional places in Bumthang.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                         <Card className="service-container head-col">
                              <Card.Img variant="top" className="img-fluid" src="https://i.ibb.co/TvztJgx/249045102-400988378176948-4896294342160610541-n.jpg?fbclid=IwAR1MkfZX1_xoOjlSmrWA8MaJboKBrE02DGC5i0m5kjdxx7qoIoYHlNuzaPE" />
                              <Card.Body>
                              <Card.Title className="fw-bold">Samira Parvin</Card.Title>
                              <Card.Subtitle>Traveller</Card.Subtitle>
                              <Card.Text className="text-primary mt-3">
                              The whole trip designed by the travel agent was really perfect. We could enjoy different sides of Bhutan, from the fast changing cities of Paro and Thimphu to the traditional places in Bumthang.
                              </Card.Text>
                              </Card.Body>
                         </Card>
                    </Col>
               </Row>
          </Container>
     );
};

export default Client;