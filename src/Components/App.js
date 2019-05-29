import React, { Component } from 'react';
import firebase from '../firebase.js'; // configs ignored file
import { useInput } from '../Hooks/InputHook';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Col, Form, Button } from 'react-bootstrap';
import formDetails from './FormData';
import PropertyInfo from './PropertyInfo';
import PurchaseInfo from './PurchaseInfo';
import RentalInfo from './RentalInfo';
import Analysis from './Analysis/';

/* Things to do
1. Find way to make sure state and formData match
2. onChange should not change int to strings
3. Add routing to break form into sections and final analysis page
4  Storage through firebase to retrieve old reports
*/

class App extends Component {
  constructor(props) {
    super(props);
      // const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
      // const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');
      this.state = this.initialState();
  }

  initialState = () => {
    return {
      // Property Info
      reportTitle: '',
      propertyAddress: '',
      city: '',
      state: '',
      zip: '',
      
      // Purchase Info
      purchasePrice: 0,
      repairCost: 0,
      annualPropertyTaxes: 0,
      purchaseClosingCost: 0,
      afterRepairValue: 0,

      downPaymentPercent: 0,
      loanInterestRate: 0,
      amortizedOverHowManyYears: 0,

      // Rental Income
      totalGrossMonthlyIncome: 0,
      otherMonthlyIncome: 0,
      electricity: 0,
      waterAndSewer: 0,
      garbage: 0,
      pmi: 0,
      hoas: 0,
      monthlyInsurance: 0,
      propertyTaxes: 0,
      otherExpenses: 0,

      vacancy: 0,
      maintenance : 0,
      capitalExpenditure: 0,
      managementFee: 0,

      annualIncomeGrowth: 0,
      annualPVGrowth: 0,
      annualExpensesGrowth: 0,
      salesExpenses: 0,
    }
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
    // Setting up properties "table" and push adds new
    // object instead up resetting a single object
    const propertiesRef = firebase.database().ref('properties');
    propertiesRef.push({...this.state});
    
    // const resetstate = this.initialState();
    // this.setState(resetstate)
    return;
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
                <PurchaseInfo state={this.state} 
                formDetails={formDetails.purchaseInfo} 
                onChange={this.changeHandler}
                />
                <RentalInfo state={this.state} 
                formDetails={formDetails.pentalInfo} 
                onChange={this.changeHandler}
                />
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <br/>
                <Analysis formState={this.state}/>
              </Form>
            </Col>
          </Container>
        </div>
    )
  }
};

export default App;
