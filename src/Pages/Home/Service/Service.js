import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, description, price } = service;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} className="card-image" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              ${price}
              <small>/hour</small>
            </Card.Text>
            <button className="btn btn-dark">Book now</button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Service;
