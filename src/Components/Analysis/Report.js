import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PieGraph from './PieGraph';
import OverYears from './OverYears';

function Report(props) {
  const propertyID = props.routingProps.match.params.id;
  const p = props.properties[propertyID];

  // Total Cash Needed
  p.totalCashNeeded = Math.ceil((parseInt(p.purchasePrice) * (parseInt(p.downPaymentPercent))/100) 
  + parseInt(p.repairCost) + parseInt(p.purchaseClosingCost));
  // Down Payment
  p.downPayment = parseInt(p.purchasePrice) * (parseInt(p.downPaymentPercent)/100);
  p.loanAmount = p.purchasePrice - p.downPayment;
  // Monthly Income
  p.monthlyIncome = parseInt(p.totalGrossMonthlyIncome) + parseInt(p.otherMonthlyIncome);

  // Monthly Expenses
  p.vacancyMonthly = p.monthlyIncome * (parseInt(p.vacancy)/100);
  p.maintenanceMonthly = p.monthlyIncome * (parseInt(p.maintenance)/100);
  p.capitalExpenditureMonthly = p.monthlyIncome * (parseInt(p.capitalExpenditure)/100);
  p.managementFeeMonthly = p.monthlyIncome * (parseInt(p.managementFee)/100);
  p.monthlyPropertyTaxes = parseInt(p.annualPropertyTaxes) / 12;

  // ** Principal and Interest Payment Calculation **
  let r = 1 + 0.01 * p.loanInterestRate / 12;
  let o = 12 * p.amortizedOverHowManyYears;
  let n = p.loanAmount / ((1 - 1 / Math.pow(r, o)) / (0.01 * p.loanInterestRate / 12));
  p.paymentInterestPayment = parseFloat(n.toFixed(2));
  
  p.totalOperatingExpenses = parseInt(p.electricity) + parseInt(p.waterAndSewer) + parseInt(p.garbage)
  + parseInt(p.pmi) + parseInt(p.hoas) + parseInt(p.monthlyInsurance)
  + parseInt(p.otherExpenses) + p.vacancyMonthly + p.maintenanceMonthly
  + p.capitalExpenditureMonthly + p.managementFeeMonthly + p.monthlyPropertyTaxes

  p.monthlyExpenses = Math.ceil(p.totalOperatingExpenses + p.paymentInterestPayment);

  // Monthly Cashflow
  p.monthlyCashflow = p.monthlyIncome - p.monthlyExpenses;

  // Cap Rate
  p.purchaseCapRate = ((((p.monthlyIncome*12) - (p.totalOperatingExpenses*12)) / parseInt(p.purchasePrice)) * 100).toFixed(2);

  //
  p.capRate = ((p.monthlyIncome*12) + (p.monthlyExpenses*12) / parseInt(p.purchasePrice))*100;
  p.capRate = p.capRate.toFixed(2);

  let numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div>
      <Row>
        <h2>{p.propertyAddress}, {p.city}, {p.state}, {p.zip}</h2>
      </Row>
      <Row className="row-border">
			  <Col md={6} className="text-center">
          <h5>Purchase Price</h5>
          ${numberWithCommas(p.purchasePrice)}
        </Col>
        <Col md={6} className="text-center">
          <h5>Total Cash Needed</h5>
          ${numberWithCommas(p.totalCashNeeded)}
        </Col>
      </Row>
      <Row className="row-border">
			  <Col md={3} className="text-center">
          <h5>Monthly Income</h5>
          ${p.monthlyIncome}
        </Col>
        <Col md={3} className="text-center">
          <h5>Monthly Expenses</h5>
          ${p.monthlyExpenses}
        </Col>
        <Col md={3} className="text-center">
          <h5>Monthly Cashflow</h5>
          ${p.monthlyCashflow}
        </Col>
        <Col md={3} className="text-center">
          <h5>Cap Rate</h5>
          {p.purchaseCapRate}%
        </Col>
      </Row>

      <Row className="row-border">
        <Col md={6} className="text-center">
        </Col>
        <Col md={6} className="text-center">
          <PieGraph data={p} />
        </Col>
      </Row>
      
      <OverYears data={p} />
    </div>
  );
}

export default Report;