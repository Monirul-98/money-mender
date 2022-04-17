import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-5">
      <h2 className="text-center">Please Login!</h2>
      <Form className="w-50 mx-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="dark" type="submit" className="d-block mx-auto">
          Log In
        </Button>
        <p className="mt-4">
          New in Money Mender?{" "}
          <Link className="text-info text-decoration-none" to="/register">
            Register here.
          </Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
