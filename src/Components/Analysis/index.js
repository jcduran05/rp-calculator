import React from 'react';
import Chart from "chart.js";
import { Col, Row } from 'react-bootstrap';
import PieGraph from './PieGraph';

function Analysis(props) {
  const propertyID = props.match.params.id;
  const property = props.properties[propertyID];
  let {
    // Proper,
    reportTitle,
    propertyAddress,
    city,
    state,
    zip,
    // Purchase Info
    purchasePrice,
    repairCost,
    annualPropertyTaxes,
    purchaseClosingCost,
    afterRepairValue,

    downPaymentPercent,
    loanInterestRate,
    amortizedOverHowManyYears,

    // Rental Income
    totalGrossMonthlyIncome,
    otherMonthlyIncome,
    electricity,
    waterAndSewer,
    garbage,
    pmi,
    hoas,
    monthlyInsurance,
    propertyTaxes,
    otherExpenses,

    vacancy,
    maintenance,
    capitalExpenditure,
    managementFee,

    annualIncomeGrowth,
    annualPVGrowth,
    annualExpensesGrowth,
    salesExpenses
  } = property;

  // Total Cash Needed
  property.totalCashNeeded = Math.ceil((parseInt(purchasePrice) * (parseInt(downPaymentPercent))/100) 
  + parseInt(repairCost) + parseInt(purchaseClosingCost));
  let totalCashNeeded = property.totalCashNeeded;

  // Down Payment
  property.downPayment = parseInt(purchasePrice) * (parseInt(downPaymentPercent)/100);
  let downPayment = property.downPayment;
  property.loanAmount = purchasePrice - downPayment;
  let loanAmount = property.loanAmount;
  
  // Monthly Income
  property.monthlyIncome = parseInt(totalGrossMonthlyIncome) + parseInt(otherMonthlyIncome);
  let monthlyIncome = property.monthlyIncome;

  // Monthly Expenses
    // ** Principal and Interest Payment Calculation **
    let r = 1 + 0.01 * loanInterestRate / 12;
    let o = 12 * amortizedOverHowManyYears;
    let n = loanAmount / ((1 - 1 / Math.pow(r, o)) / (0.01 * loanInterestRate / 12));
    property.paymentInterestPayment = parseFloat(n.toFixed(2));


  property.vacancyMonthly = monthlyIncome * (parseInt(vacancy)/100);
  property.maintenanceMonthly = monthlyIncome * (parseInt(maintenance)/100);
  property.capitalExpenditureMonthly = monthlyIncome * (parseInt(capitalExpenditure)/100);
  property.managementFeeMonthly = monthlyIncome * (parseInt(managementFee)/100);
  property.monthlyPropertyTaxes = parseInt(annualPropertyTaxes) / 12;
  
  let { vacancyMonthly,maintenanceMonthly,capitalExpenditureMonthly,
    managementFeeMonthly, monthlyPropertyTaxes, paymentInterestPayment } = property;
  property.totalOperatingExpenses = parseInt(electricity) + parseInt(waterAndSewer) + parseInt(garbage)
  + parseInt(pmi) + parseInt(hoas) + parseInt(monthlyInsurance)
  + parseInt(otherExpenses) + vacancyMonthly +maintenanceMonthly
  + capitalExpenditureMonthly + managementFeeMonthly + monthlyPropertyTaxes
  let totalOperatingExpenses = property.totalOperatingExpenses;


  let monthlyExpenses = Math.ceil(totalOperatingExpenses + paymentInterestPayment);

  // Monthly Cashflow
  property.monthlyCashflow = monthlyIncome - monthlyExpenses;
  let monthlyCashflow = property.monthlyCashflow;

  // Cap Rate
  property.purchaseCapRate = ((((monthlyIncome*12) - (totalOperatingExpenses*12)) / parseInt(purchasePrice)) * 100).toFixed(2);
  let purchaseCapRate = property.purchaseCapRate;

  //
  let capRate = ((monthlyIncome*12) + (monthlyExpenses*12) / parseInt(purchasePrice))*100;
  capRate = capRate.toFixed(2);

  let numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div>
      <Row className="row-border">
			  <Col md={6} className="text-center">
          <h5>Purchase Price</h5>
          ${numberWithCommas(purchasePrice)}
        </Col>
        <Col md={6} className="text-center">
          <h5>Total Cash Needed</h5>
          ${numberWithCommas(totalCashNeeded)}
        </Col>
      </Row>
      <Row className="row-border">
			  <Col md={3} className="text-center">
          <h5>Monthly Income</h5>
          ${monthlyIncome}
        </Col>
        <Col md={3} className="text-center">
          <h5>Monthly Expenses</h5>
          ${monthlyExpenses}
        </Col>
        <Col md={3} className="text-center">
          <h5>Monthly Cashflow</h5>
          ${monthlyCashflow}
        </Col>
        <Col md={3} className="text-center">
          <h5>Cap Rate</h5>
          {purchaseCapRate}%
        </Col>
      </Row>

      <Row className="row-border">
        <Col md={6} className="text-center">
        </Col>
        <Col md={6} className="text-center">
          <PieGraph data={property}/>
        </Col>
      </Row>
    </div>
  );
}

export default Analysis;