import React from 'react';
import './App.css';
import { Col, Row, Form } from 'react-bootstrap';

function RentalInfo() {
  return (
    <Row className="row-border">
      <Col md={12}>
        <h4>Rental Income</h4>
      </Col>
      {/* Purchase & Expenses */}
      <Col md={6}>
        <Form.Group controlId="rpGrossMonthtlyIncome">
          <Form.Label>Total Gross Monthly Income</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="rpOtherMonthtlyIncome">
          <Form.Label>Other Monthly Income</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>

      <Col md={12}>
        <h4>Landlord Expenses</h4>
      </Col>

      <Col md={4}>
        <Form.Group controlId="rpExpensesElectricity">
          <Form.Label>Electricity</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="rpExpensesGarbag">
          <Form.Label>Water & Sewer</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="rpExpensesGarbag">
          <Form.Label>Garbage</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="rpExpensesPMI">
          <Form.Label>PMI</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="rpExpensesHOA">
          <Form.Label>HOAs</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="rpExpensesInsurance">
          <Form.Label>Monthly Insurance</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>

      <Col md={4}>
        <Form.Group controlId="rpExpensesPropertyTaxes">
          <Form.Label>Property Taxes</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={4}>
        <Form.Group controlId="rpExpensesOther">
          <Form.Label>Other Expenses</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>

      <Col md={12}>
        <h4>Variable Expenses</h4>
      </Col>
      <Col md={6}>
        <Form.Group controlId="rpVacancy">
          <Form.Label>Vacancy (%)</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="rpMaintenance">
          <Form.Label>Maintenance (%)</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="rpCapitalExpenditure">
          <Form.Label>Capital Expenditure (%)</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="rpManagementFee">
          <Form.Label>Management Fee (%)</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>

      <Col md={12}>
        <h4>Future Assumptions</h4>
      </Col>
      <Col md={6}>
        <Form.Group controlId="rpAnnualIncomeGrowth">
          <Form.Label>Annual Income Growth (%)</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="rpAnnuaPVGrowth">
          <Form.Label>Annual PV Growth (%)</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="rpAnnualExpenseGrowth">
          <Form.Label>Annual Expenses Growth (%)</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
      <Col md={6}>
        <Form.Group controlId="rpSalesExpenses">
          <Form.Label>Sales Expenses (%)</Form.Label>
          <Form.Control type="input" placeholder="$" />
        </Form.Group>
      </Col>
    </Row>
  );
}

export default RentalInfo;