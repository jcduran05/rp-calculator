import React from 'react';
import './App.css';
import { Col, Row } from 'react-bootstrap';
import FormGroupCreator from './FormGroupCreator';

function PurchaseInfo(props) {
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

  let PurchaseInfoArr = [formComponents.slice(0,5)];
  let loanDetailsArr = [formComponents.slice(5)];

  return (
    <Row className="row-border">
      <Col md={12}>
        <h4>Purchase Info</h4>
      </Col>
      {PurchaseInfoArr}

      <Col md={12}>
        <h4>Loan Details</h4>
      </Col>
      {loanDetailsArr}

    </Row>
  );
}

export default PurchaseInfo;