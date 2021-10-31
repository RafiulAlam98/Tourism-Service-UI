import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserOrder from "../UserOrder/UserOrder";
import useAuth from './../Hooks/UseAuth/useAuth';
import './MyOrder.css'


const MyOrder = () => {
     const [myOrder, setMyOrder] = useState([])
     const {user} = useAuth()
     // console.log(user.email)

     useEffect(()=>{
          fetch('https://boiling-chamber-75432.herokuapp.com/users')
          .then(res=> res.json())
          .then(data => {
               // console.log(data)
               setMyOrder(data)
          })
     },[])
     
     const findUser = myOrder.filter(data => data?.email === user?.email)
     // console.log(findUser)


     return (

          <Container fluid>
             <Row className="service-container" >
                    <div className="mb-5 mt-4">
                        
                         <h1 className="text-color">We Show Your Trip here <br /> And You Can Also Cancel The Trip</h1>
                    </div>

               {
                    findUser.map(user => <UserOrder key={user._id} user={user}></UserOrder> )
               }
               

               <h2 className="text-color event-style">Our Best Events</h2>
               <Col xs={6} md={6} lg={3} className="mt-5">
                    <i className="fas fa-globe-americas fa-6x text-warning"></i>
                    <h2 className="text-warning mt-2 ">World Tour</h2>
                   
               </Col>
               <Col xs={6} md={6} lg={3} className="mt-5">
                    <i className="fas fa-plane fa-6x text-warning"></i>
                    <h2 className="text-warning mt-2 ">Airline Tickets</h2>
               </Col>
               <Col xs={6} md={6} lg={3} className="mt-5">
                    <i className="fas fa-hotel fa-6x text-warning"></i>
                    <h2 className="text-warning mt-2 ">Hotel Reservation</h2>
               </Col>
               <Col xs={6} md={6} lg={3} className="mt-5">
                    <i className="far fa-compass fa-6x text-warning"></i>
                    <h2 className="text-warning mt-2 ">Adventure Tour</h2>
               </Col>
               <Col xs={6} md={6} lg={3} className="mt-4 mb-5">
                    <i className="fas fa-water fa-6x text-warning"></i>
                    <h2 className="text-warning mt-2 ">Ocean Tour</h2>
               </Col>
               <Col xs={6} md={6} lg={3} className="mt-4 mb-5">
                    <i className="fas fa-baseball-ball fa-6x text-warning"></i>
                    <h2 className="text-warning mt-2 ">Sport Tour</h2>
               </Col>
               <Col xs={6} md={6} lg={3} className="mt-4 mb-5">
                    <i className="fas fa-heartbeat fa-6x text-warning"></i>
                    <h2 className="text-warning mt-2 ">Medical Tour</h2>
               </Col>
               <Col xs={6} md={6} lg={3} className="mt-4 mb-5">
                    <i className="fas fa-swimming-pool fa-6x text-warning"></i>
                    <h2 className="text-warning mt-2 ">Summer Tour</h2>
               </Col>
             </Row>
          </Container>
     );
};

export default MyOrder;