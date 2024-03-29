import React, { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";

const Booking = (props) => {
  const [users, setUsers] = useState([]);
  console.log(users);
  // console.log(props.booked)
  const { _id, name, offer } = props.booked;

  const cancelBooking = (id) => {
    const proceed = window.confirm("Are You proceed to Cancel?");
    if (proceed) {
      fetch(
        `https://tourism-service-server-rafiulalam98.vercel.app/users/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
          }
        });
    }
  };
  return (
    <Col>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{offer}</Card.Text>
          <Button onClick={() => cancelBooking(_id)} variant="primary">
            Cancel
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Booking;
