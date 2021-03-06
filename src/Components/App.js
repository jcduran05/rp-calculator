import React, { useContext } from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import PropertiesProvider from '../Providers/PropertiesProvider';
import { UserContext } from '../Providers/UserProvider';

import './App.css';
import { Container, Col, Navbar, Nav } from 'react-bootstrap';

import Authentication from './Authentication';

import Home from './Home';
import Analysis from './Analysis';
import Form from './Form';

import SignIn from './SignIn';
import SignUp from './SignUp';

/* Things to do
1. Find way to make sure state and formData match
2. onChange should not change int to strings
3. Design layout analysis page
4. Add form validation
*/

function App(props) {
  const user = useContext(UserContext) || {};

	// if (!user.hasOwnProperty('uid')) {
  //     return (<></>)
  // }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">RE Calculator</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create Report</Nav.Link>
        </Nav>
        <Nav>
          <Authentication />
        </Nav>
      </Navbar>
      {/* <Authentication /> */}
      <Container>
        <Col md={12}>
          <PropertiesProvider user={user}>
            <Switch>
              <Route exact path="/" component={() => <Home />} />
              <Route exact path="/create" component={props => <Form {...props} user={user} />} />
              <Route exact path="/show/:id" component={props => <Analysis {...props} />} />
              <Route exact path="/edit/:id" component={props => <Form {...props} />} />
              <Route exact path="/login" component={() => <SignIn {...user} />} />
              <Route exact path="/register" component={() => <SignUp {...user} />} />
            </Switch>
          </PropertiesProvider>
        </Col>
      </Container>
    </div>
  )
};

export default App;
