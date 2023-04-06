import React from 'react';
import { Button, Card, Col } from "react-bootstrap";

const UserOrder = (props) => {
  // console.log(props.user)
  const orders = props.user;
  const arr = [orders];
  // console.log(arr)
  const { _id, address, email, name, place, cost, status } = props.user;

  const cancelBooking = (id) => {
    const proceed = window.confirm("Are You proceed to Cancel trip?");
    if (proceed) {
      fetch(
        `https://tourism-service-server-rafiulalam98.vercel.app/users/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            const remainingOrder = arr.filter((order) => order._id !== id);
            alert("deleted successfully");
          }
        });
    }
  };

  return (
    <Col xs={12} md={12} lg={12}>
      <Card className="service-container mt-5 mb-5">
        <Card.Body>
          <Card.Title className="head-col fw-bold mb-3">{name}</Card.Title>
          <Card.Title className="head-col fw-bold mb-3">{cost}</Card.Title>
          <Card.Subtitle className="mb-2 text-color mb-3">
            <span className="text-dark">Address:</span> {address}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-color">{email}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-color">
            Status: {status}
          </Card.Subtitle>
          <Card.Text className="mb-2 text-color mb-3">
            <span className="text-dark">Booking For: </span> {place}
          </Card.Text>
          <Button
            variant="dark"
            className=" text-warning"
            onClick={() => cancelBooking(_id)}
          >
            Cancel Trip
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserOrder;