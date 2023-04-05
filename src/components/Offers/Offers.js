import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Offer from './../Offer/Offer';
import './Offers.css'

const Offers = () => {

     const [offers,setOffers] = useState([])
     const [isLoading,setIsLoading] = useState(true)

     useEffect(() => {
       setIsLoading(true);
       fetch('https://tourism-service-server.vercel.app/offers')
         .then(res => res.json())
         .then(data => {
           if (isLoading) {
             <Spinner animation="border" variant="danger" />;
           }
           setOffers(data);
           setIsLoading(false);
         });
     }, []);

     return (
       <Container fluid className="services-container pb-5">
         <h4 className="text-color pt-5">Choose Your Package</h4>
         <h1 className="head-col">
           Select Your Best Package <br /> For Your Travel
         </h1>
         <Row>
           {offers?.map(offer => (
             <Offer key={offer._id} offer={offer}></Offer>
           ))}
         </Row>
       </Container>
     );
};

export default Offers;