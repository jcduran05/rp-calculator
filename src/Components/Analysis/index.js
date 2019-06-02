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

  // Initial Expenses
  property.totalCashNeeded = (parseInt(purchasePrice) * (parseInt(downPaymentPercent))/100) 
  + parseInt(repairCost) + parseInt(purchaseClosingCost);
  property.totalCashNeeded = Math.ceil(property.totalCashNeeded);
  let totalCashNeeded = property.totalCashNeeded;

  // Income
  property.monthlyIncome = parseInt(totalGrossMonthlyIncome) + parseInt(otherMonthlyIncome);
  let monthlyIncome = property.monthlyIncome;

  // Expenses breakdown
  property.vacancyMonthly = monthlyIncome * (parseInt(vacancy)/100);
  property.maintenanceMonthly = monthlyIncome * (parseInt(maintenance)/100);
  property.capitalExpenditureMonthly = monthlyIncome * (parseInt(capitalExpenditure)/100);
  property.managementFeeMonthly = monthlyIncome * (parseInt(managementFee)/100);
  property.monthlyPropertyTaxes = parseInt(annualPropertyTaxes) / 12;
  property.totalOperatingExpenses = electricity+waterAndSewer+garbage+pmi+hoas+monthlyInsurance+otherExpenses;
  let { vacancyMonthly,maintenanceMonthly,capitalExpenditureMonthly,
  managementFeeMonthly, monthlyPropertyTaxes, totalOperatingExpenses } = property;
  propertyTaxes = annualPropertyTaxes/12;
  let monthlyExpenses = totalOperatingExpenses + propertyTaxes;

  let capRate = ((monthlyIncome*12 +  monthlyExpenses*12) / purchasePrice)*100;
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
          ${purchasePrice}
        </Col>
        <Col md={3} className="text-center">
          <h5>Cap Rate</h5>
          {capRate}%
        </Col>
      </Row>

      <PieGraph data={property}/>
    </div>
  );
}

export default Analysis;