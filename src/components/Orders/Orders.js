import React from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import useAuth from './../Hooks/UseAuth/useAuth';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const Orders = () => {
     const [offers,setOffers] = useState([])
     const { register, handleSubmit, formState: { errors } } = useForm();
     const {offerId} = useParams()
     const {user} = useAuth()

     // console.log(offerId)

     useEffect(()=>{
          fetch('http://localhost:5000/offers')
          .then(res =>res.json())
          .then(data => {
               // console.log(data)
               setOffers(data)
          })
     },[])

     const findOffer = offers.find(offer => offer?._id ===offerId)
     console.log(findOffer);


     const onSubmit = data => {
          fetch('http://localhost:5000/users',{
               method:'POST',
               headers:{
                    'content-type':'application/json'
               },
               body:JSON.stringify(data)
          })
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               if(data?.insertedId){
                    alert('Successfully Added the User')
                    
               }
          })

     };

     return (
          <div>
               <Container fluid>
                   <Row>
                        <Col>
                        <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={findOffer?.img} />
                              <Card.Body>
                              <Card.Title>{findOffer?.title}</Card.Title>
                              <Card.Text>
                                {findOffer?.description}
                              </Card.Text>
                              </Card.Body>
                              </Card>
                        </Col>
                   </Row>
               </Container>
               <Container fluid>
                  
                    <form className="d-flex flex-column w-25 justify-content-center mx-auto p-2" onSubmit={handleSubmit(onSubmit)}>
                        
                         <input className="mb-3" defaultValue={user.displayName} {...register("name",{ required: true }) } />

                         {errors.name && <span>This field is required</span>}
                         
                         <input className="mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                
                         {errors.email && <span>This field is required</span>}

                         <input className="mb-3" placeholder="Address Field" {...register("address", { required: true })} />

                         {errors.address && <span>This field is required</span>}

                         <input className="mb-3"  placeholder="Phone Number" {...register("phone", { required: true })} />

                         {errors.phone && <span>This field is required</span>}

                         <input className="mb-3"  defaultValue={findOffer?.title}  {...register("offer")} />
                         
                         <input type="submit" />
                    </form>
               </Container>

          </div>
     );
};

export default Orders;