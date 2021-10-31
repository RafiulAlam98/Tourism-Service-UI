import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row, Table, Card, Button } from 'react-bootstrap';
import './ManageOrder.css'

const ManageOrder = () => {
     const [booking,setBooking] = useState([])


     const cancelBooking = id =>{
          const proceed = window.confirm('Are You proceed to Cancel trip?')
          if(proceed){
               fetch(`https://boiling-chamber-75432.herokuapp.com/users/${id}`,{
                    method:'DELETE',
               })
               .then(res => res.json())
               .then(data =>{
                         if (data.deletedCount>0){
                              alert('deleted successfully')
                              // const remainingOrder = arr.filter(order => order._id !== id )
                         }
               })
          }
     }



     useEffect(()=>{
          fetch('https://boiling-chamber-75432.herokuapp.com/users')
          .then(res=> res.json())
          .then(data => {
               console.log(data)
               setBooking(data)
          })
     },[])

     return (
          <Container fluid>
               <div className="service-container">
                    
               <div className=" mb-5">
                    <h4 className="text-color">Manage Information</h4>
                    <h1 className="head-col mb-4">
                         You Are Showing All the Booking Orders <br /> By Our Clients 
                    </h1>
               </div>

              <Row>
                    {
                         booking.map(booked=> 
                         
                         
                              <Col xs={12} md={6} lg={3}>
                                   
                                   <div className="manage-container mt-2 mb-4">
                                        <p>ID: {booked._id}</p>
                                        <p>Email: {booked.email}</p>
                                        <p>Name: {booked.name}</p>
                                        <p>Address: {booked.address}</p>
                                        <p>Trip: {booked.offer}</p>
                                        <Button variant="dark" className="text-warning" onClick={()=> cancelBooking(booked._id)}>Cancel <i className="fas fa-trash-alt text-warning"
                                        ></i></Button>
                                   </div>
                                   
                              </Col>
                         
                         )
                    }
              </Row>

               
                              
          
               </div>

            
          </Container>
     );
};

export default ManageOrder;


{/* <table class="table">
<thead>
     <tr>
          <th scope="col">ID</th>
          <th scope="col">Email ID</th>
          <th scope="col">Name</th>
          <th scope="col">Place</th>
          <th scope="col">Offer</th>
          <th scope="col">Action</th>
     </tr>
</thead>

     

</table> */}



<table className="table">

                              



</table>