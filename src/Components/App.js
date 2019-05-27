import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Col, Form, Button } from 'react-bootstrap';
import PropertyInfo from './PropertyInfo';
import PurchaseInfo from './PurchaseInfo';
import RentalInfo from './RentalInfo';

let form = {
  reportTitle: {value: 'Test'},
  propertyAddress: {value: ''},
  city: {value: ''},
  state: {value: ''},
  zip: {value: ''},

  purchasePrice: {value: 0},
  repairCost: {value: 0},
  annualPropertyTaxes: {value: 0},
  purchaseClosingCost: {value: 0},
  afterRepairValue: {value: 0},

  downPaymentPercent: {value: 0},
  loanInterestRate: {value: 0},
  amortizedOverHowManyYears: {value: 0},
};

let formDetails = {
  PropertyInfo: {
    reportTitle: {
      type: 'input',
      size: {
        md: 12
      }
    }
  },
  PurchaseInfo: {

  },
  RentalInfo: {

  }
};

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        form
      };
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        form: {
          [name]: value
        }
    });
  }

  submitFormHandler = event => {
    event.preventDefault();
    console.dir(this.refs.name.value); //will give us the name value
  }

  render() {
    return (
        <div className="App">
          <Container>
            <Col md={{ span: 8, offset: 2 }}>
              <Form onSubmit={this.submitFormHandler}>
                <PropertyInfo formDetails={formDetails.PropertyInfo} />
                <PurchaseInfo />
                <RentalInfo />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Container>
        </div>
    )
  }
};

export default App;
