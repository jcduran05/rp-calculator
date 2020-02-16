import React from 'react'
import { Nav } from 'react-bootstrap';

const SignInAndSignUp = () => (
  <>
    <Nav.Link href="/login">Login</Nav.Link>
    <Nav.Link href="/register">Register</Nav.Link>
  </>
);

export default SignInAndSignUp;