import React from 'react';
import { Col, Button } from 'react-bootstrap';

const AllOrder = (props) => {
     console.log(props)
     const {_id,email,name,address,place,status} = props.booked

     const cancelBooking = id => {
       const proceed = window.confirm('Are You proceed to Cancel trip?');
       if (proceed) {
         fetch(`https://tourism-service-server.vercel.app/users/${id}`, {
           method: 'DELETE',
         })
           .then(res => res.json())
           .then(data => {
             if (data.deletedCount > 0) {
               alert('deleted successfully');
               // const remainingOrder = arr.filter(order => order._id !== id )
             }
           });
       }
     };

     const handleUpdate = id => {
       fetch(`https://tourism-service-server.vercel.app/users/${id}`, {
         method: 'PUT',
         headers: {
           'content-type': 'application/json',
         },
         body: JSON.stringify(props),
       })
         .then(res => res.json())
         .then(data => {
           if (data.modifiedCount > 0) {
             alert('User Updated Successfully');
           }
           console.log(data);
         });
     };



     return (
                              <Col xs={12} md={6} lg={3}>
                                   
                                   <div className="manage-container mt-2 mb-4">
                                        <p>ID: {_id}</p>
                                        <p>Email: {email}</p>
                                        <p>Name: {name}</p>
                                        <p>Address: {address}</p>
                                        <p>Trip: {place}</p>
                                        <p>Status: {status}</p>
                                        <Button variant="dark" className="text-warning" onClick={()=> cancelBooking(_id)}>Cancel <i className="fas fa-trash-alt text-warning"
                                        ></i></Button>

                                        <Button variant="dark" className="text-warning" onClick={()=> handleUpdate(_id)}>Upadte Status
                                        
                                        </Button>
                                   </div>
                                   
                              </Col>
     );
};

export default AllOrder;