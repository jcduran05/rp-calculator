import React from 'react';
import './App.css';
import { Col, Row, Form } from 'react-bootstrap';

function PurchaseInfo() {
  return (
    <Row className="row-border">
      <Col md={12}>
        <h4>Purchase Info</h4>
      </Col>
      {/* Purchase & Expenses */}
      <Col md={6}>
        <Form.Group controlId="rpPurchasePrice">
          <Form.Label>Purchase Price</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="rpRepairCost">
          <Form.Label>Repair Cost</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>

			{/* Annual Property Taxes */}
			<Col md={6}>
				<Form.Group controlId="rpPropertyTaxes">
					<Form.Label>Annual Property Taxes</Form.Label>
					<Form.Control type="input" placeholder="$" />
				</Form.Group>
			</Col>
      {/* Closing Cost */}
      <Col md={6}>
        <Form.Group controlId="rpClosingCost">
          <Form.Label>Purchase Closing Cost </Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>

      {/* ARV - After Repair Value */}
      <Col md={6}>
        <Form.Group controlId="rpARV">
          <Form.Label>After Repair Value</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={6}></Col>

      <Col md={12}>
        <h4>Loan Details</h4>
      </Col>

      <Col md={6}>
        <Form.Group controlId="rpDownPayment">
          <Form.Label>Down payment Percent</Form.Label>
          <Form.Control type="input" />
        </Form.Group>
      </Col>
      <Col md={6}></Col>
      <Col md={6}>
        <Form.Group controlId="rpLoanInterestRate">
          <Form.Label>Loan Interest Rate</Form.Label>
          <Form.Control type="input" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="rpAmortizedYears">
          <Form.Label>Amortized Over How Many Years?</Form.Label>
          <Form.Control type="input" />
        </Form.Group>
      </Col>
    </Row>
  );
}

export default PurchaseInfo;