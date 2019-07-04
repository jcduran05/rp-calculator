import React, { Component } from 'react';
import firebase from '../firebase.js'; // configs ignored file
import './App.css';
import { Form, Button } from 'react-bootstrap';
import formDetails from './FormData';
import PropertyInfo from './PropertyInfo';
import PurchaseInfo from './PurchaseInfo';
import RentalInfo from './RentalInfo';

function FormContainer(props) {
  const propertyID = props.routingProps.match.params.id;

  let initialState = () => {
    if (propertyID) {
      return props.state.properties[propertyID];
    }

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
  };

  let localState = initialState();

  let changeHandler = (event) => {
    const name = event.target.id;
    const value = event.target.value;
    localState[name] = value;
  }

  let submitFormHandler = (event) => {
    event.preventDefault();
    // Setting up properties "table" and push adds new
    // object instead up resetting a single object
    const propertiesRef = firebase.database().ref('properties');
    propertiesRef.push(localState);
    
    // const resetstate = initialState();
    // setState(resetstate)
    return;
  }

  return (
      <Form onSubmit={submitFormHandler}>
          <PropertyInfo state={localState} 
          formDetails={formDetails.propertyInfo} 
          onChange={changeHandler}
          />
          <PurchaseInfo state={localState} 
          formDetails={formDetails.purchaseInfo} 
          onChange={changeHandler}
          />
          <RentalInfo state={localState} 
          formDetails={formDetails.pentalInfo} 
          onChange={changeHandler}
          />
          <Button variant="primary" type="submit">
              Submit
          </Button>
      </Form>
  )

};

export default FormContainer;
