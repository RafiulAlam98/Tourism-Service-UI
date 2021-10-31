import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, } from 'react-bootstrap';


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
               <table class="table">
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
                    
                         {
                              booking.map(booked=> 
                              <tbody>   
                                   <tr>
                                        <th scope="row">{booked._id}</th>
                                        <td>{booked.email}</td>
                                        <td>{booked.name}</td>
                                        <td>{booked.address}</td>
                                        <td>{booked.offer}</td>
                                        <td><i className="fas fa-trash-alt text-danger"
                                        onClick={()=> cancelBooking(booked._id)}></i></td>
                                   </tr>     
                              </tbody> )
                         }
               
                    </table>
          
          </Container>
     );
};

export default ManageOrder;



<tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                         </tr>