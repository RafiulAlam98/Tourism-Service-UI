import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Booking from '../Booking/Booking';

const ManageOrder = () => {
     const [booking,setBooking] = useState([])

     useEffect(()=>{
          fetch('http://localhost:5000/users')
          .then(res=> res.json())
          .then(data => {
               console.log(data)
               setBooking(data)
          })
     },[])

     return (
          <Container fluid>
            <Row>
            {
                 booking.map(booked=> <Booking key={booked._id} booked={booked}></Booking>)
            }
            </Row>
          </Container>
     );
};

export default ManageOrder;