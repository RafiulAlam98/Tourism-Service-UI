import React from 'react';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import useAuth from './../Hooks/UseAuth/useAuth';
import { Col, Container, Row,  } from 'react-bootstrap';
import './Order.css'

const Orders = () => {
     const [offers,setOffers] = useState([])
     const { register, handleSubmit,reset, formState: { errors } } = useForm();
     
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
          alert("Are You Sure to want to proceed?")
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
                    console.log(data)
                    alert('Successfully Added the User')
                    reset(data)
               }
          })
          console.log(data)

     };

     return (
          <>
               <Container fluid>
                   <Row className="service-container pb-5">

                    <div className="mt-3 mb-5">
                         <h4 className="text-color">Booking Information</h4>
                         <h1 className="head-col mb-4">You Must Regiter Your informating <br /> for booking and stay with us. </h1>
                    </div>
               
                         <Col xs={12} md={6} lg={6}>
                              <img src={findOffer?.img} className="img-fluid rounded-2" alt="" /> 
                              <h5 className="head-col mt-2">{findOffer?.description}</h5>
                         </Col>
                         <Col xs={12} md={6} lg={6} >
                             
                              <h6 className="text-color">Place: {findOffer?.place}</h6>
                              <h5 className="head-col">Cost Per Person: {findOffer?.cost}</h5>
                              <h6 className="text-color">Date: {findOffer?.date}</h6>
                              <h5 className="head-col">Deparature: {findOffer?.deparature}</h5>
                              <h6 className="text-color">Location: {findOffer?.location}</h6>
                              <h5 className="head-col">Rating: {findOffer?.rating}</h5>
                              <h6 className="text-color">Title: {findOffer?.title}</h6>
                         </Col>
                    </Row>
               </Container>

               <Container fluid className="container-body">
                    <Row>
                         <Col xs={12} md={12} lg={12} className="mb-5 mt-2">

                            
                              <form className="d-flex flex-column mt-5 justify-content-center mx-auto pb-4 px-5  form-container" onSubmit={handleSubmit(onSubmit)}>
                              <h3 className="mt-3 mb-4 head-col">Register For Booking</h3>
                                   <input className="mb-3" defaultValue={user.displayName} {...register("name",{ required: true }) } />

                                   {errors.name && <span>This field is required</span>}
                                   
                                   <input className="mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                              
                                   {errors.email && <span>This field is required</span>}

                                   <input className="mb-3" placeholder="Address Field" {...register("address", { required: true })} />

                                   {errors.address && <span>This field is required</span>}

                                   <input className="mb-3"  placeholder="Phone Number" {...register("phone", { required: true })} />

                                   {errors.phone && <span>This field is required</span>}

                                   <input className="mb-3"  defaultValue={findOffer?.place}  {...register("offer", { required: true })} />

                                   {errors.offer && <span>This field is required</span>}
                                   
                                   <input type="submit" />
                                   
                              </form>
                         </Col>
                    </Row>
               </Container>

          </>
     );
};

export default Orders;









// <Col xs={12} md={12} lg={12}>
//                          <div className="d-flex flex-row justify-content-between mb-5 mt-5 order-container">
                             
//                          </div>
//                     </Col>