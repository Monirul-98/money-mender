import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="my-5">
      <h2 className="text-center">Please Register!</h2>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Button variant="dark" type="submit" className="d-block mx-auto">
          Register
        </Button>
        <p className="mt-4">
          Already have an account?{" "}
          <Link className="text-info text-decoration-none" to="/login">
            Log in here
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Registration;
