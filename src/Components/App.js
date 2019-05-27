import React, { Component } from 'react';
import { useInput } from '../Hooks/InputHook';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Col, Form, Button } from 'react-bootstrap';
import PropertyInfo from './PropertyInfo';
import PurchaseInfo from './PurchaseInfo';
import RentalInfo from './RentalInfo';

let formDetails = {
  propertyInfo: {
    reportTitle: {
      type: 'input',
      placeholder: '',
      size: {
        default: 12,
        sm: 12,
        md: 12
      }
    },
    propertyAddress: {
      type: 'input',
      placeholder: '',
      size: {
        default: 12,
      }
    },
    city: {
      type: 'input',
      placeholder: '',
      size: {
        default: 4,
      }
    },
    state: {
      type: 'input',
      placeholder: '',
      size: {
        default: 4,
      }
    },
    zip: {
      type: 'input',
      placeholder: '',
      size: {
        default: 4,
      }
    }
  },
  purchaseInfo: {

  },
  pentalInfo: {

  }
};

class App extends Component {
  constructor(props) {
    super(props);
    // const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
    // const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');
      this.state = {
        // Property Info
        reportTitle: 'Test',
        propertyAddress: '',
        city: '',
        state: '',
        zip: '',

      purchaseInfo: {
        // purchasePrice: {value: 0},
        // repairCost: {value: 0},
        // annualPropertyTaxes: {value: 0},
        // purchaseClosingCost: {value: 0},
        // afterRepairValue: {value: 0}
      },
      pentalInfo: {
        // downPaymentPercent: {value: 0},
        // loanInterestRate: {value: 0},
        // amortizedOverHowManyYears: {value: 0}
      }
    };
  }

  changeHandler = event => {
    const name = event.target.id;
    const value = event.target.value;
    this.setState({
      [name]: value
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
                <PropertyInfo state={this.state} 
                formDetails={formDetails.propertyInfo} 
                onChange={this.changeHandler}
                />
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
