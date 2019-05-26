import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropertyInfo from './PropertyInfo';
import PurchaseInfo from './PurchaseInfo';
import RentalInfo from './RentalInfo';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Container>
            <Col md={{ span: 8, offset: 2 }}>
              <Form>
                <PropertyInfo />
                <PurchaseInfo />
                <RentalInfo />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Container>
        </div>
      </Router>
    )
  }
};

export default App;
