import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Offer from './../Offer/Offer';
import './Offers.css'

const Offers = () => {

     const [offers,setOffers] = useState([])
     useEffect(()=>{
          fetch('http://localhost:5000/offers')
          .then(res =>res.json())
          .then(data => {
               // console.log(data)
               setOffers(data)
          })
     },[])

     return (
          <Container fluid className="services-container">
               <h4 className="text-color">Choose Your Package</h4>
               <h1 className="head-col">Select Your Best Package <br /> For Your Travel</h1>
            <Row>
               {
                    offers.map(offer => <Offer key={offer._id}
                    offer={offer}></Offer>)
               }
            </Row>
          </Container>
     );
};

export default Offers;