import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import UserOrder from "../UserOrder/UserOrder";
import useAuth from './../Hooks/UseAuth/useAuth';

const MyOrder = () => {
     const [myOrder, setMyOrder] = useState([])
     const {user} = useAuth()
     // console.log(user.email)

     useEffect(()=>{
          fetch('http://localhost:5000/users')
          .then(res=> res.json())
          .then(data => {
               // console.log(data)
               setMyOrder(data)
          })
     },[])
     
     const findUser = myOrder.filter(data => data?.email === user?.email)
     // console.log(findUser)


     return (

          <Container>
             <Row>
               {
                    findUser.map(user => <UserOrder key={user._id} user={user}></UserOrder> )
               }
               
             </Row>
          </Container>
     );
};

export default MyOrder;