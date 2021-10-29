import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { useState } from 'react';

const Booking = (props) => {
     const [users,setUsers] = useState([])
     console.log(users)
     // console.log(props.booked)
     const {_id,name,offer} = props.booked


     const cancelBooking = id =>{
          const proceed = window.confirm('Are You proceed to Cancel?')
          if(proceed){
               fetch(`http://localhost:5000/users/${id}`,{
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
     return (
          <Col>
               <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                       {offer}
                    </Card.Text>
                    <Button onClick={()=> cancelBooking(_id)} variant="primary">Cancel</Button>
                    </Card.Body>
               </Card>
          </Col>
     );
};

export default Booking;