import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropertiesProvider from './PropertiesProvider';

import './App.css';
import { Container, Col, Navbar, Nav } from 'react-bootstrap';

import Home from './Home';
import Analysis from './Analysis';
import Form from './Form';
import FormContainer from './FormContainer';

/* Things to do
1. Find way to make sure state and formData match
2. onChange should not change int to strings
3. Design layout analysis page
4. Add form validation
*/

function App(props) {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">RE Calculator</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/create">Create Report</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Col md={12}>
        <PropertiesProvider>
        <Router>
          <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/create" component={props => <Form {...props} />} />
          <Route exact path="/show/:id" component={props => <Analysis {...props} />} />
          <Route exact path="/edit/:id" component={props => <Form {...props} />} />
          </Switch> 
        </Router>
        </PropertiesProvider>
        </Col>
      </Container>
    </div>
  )
};

export default App;
