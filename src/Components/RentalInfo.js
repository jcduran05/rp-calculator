import React from 'react';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import FormGroupCreator from './FormGroupCreator';

function RentalInfo(props) {
  let { formDetails, state } = props;
	let changeHandler = props.onChange;
	let formComponents = [];

	for (let key in formDetails) {
		formComponents.push(<FormGroupCreator 
			key={key} 
			id={key}
			state={state}
			formDetails={formDetails[key]}
			onChange={changeHandler}
			/>)
  }

  let rentalIncomeArr = [formComponents.slice(0,2)];
  let lanlordExpensesArr = [formComponents.slice(2,10)];
  let variableExpensesArr = [formComponents.slice(10,14)];
  let futureExpensesArr = [formComponents.slice(14)];

  return (
    <Row className="row-border">
      <Col md={12}>
        <h4>Rental Income</h4>
      </Col>
      {rentalIncomeArr}

      <Col md={12}>
        <h4>Landlord Expenses</h4>
      </Col>
      {lanlordExpensesArr}

      <Col md={12}>
        <h4>Variable Expenses</h4>
      </Col>
      {variableExpensesArr}

      <Col md={12}>
        <h4>Future Assumptions</h4>
      </Col>
      {futureExpensesArr}
    </Row>
  );
}

export default RentalInfo;