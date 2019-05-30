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
    maintenance ,
    capitalExpenditure,
    managementFee,

    annualIncomeGrowth,
    annualPVGrowth,
    annualExpensesGrowth,
    salesExpenses
  } = property;
  console.log('this is the property ', property);

  //Income
  property.monthlyIncome = parseInt(totalGrossMonthlyIncome) + parseInt(otherMonthlyIncome);
  // Expenses breakdown
  property.vacancyMonthly = property.monthlyIncome * (parseInt(vacancy)/100);
  property.maintenanceMonthly = property.monthlyIncome * (parseInt(maintenance)/100);
  property.capitalExpenditureMonthly = property.monthlyIncome * (parseInt(capitalExpenditure)/100);
  property.managementFeeMonthly = property.monthlyIncome * (parseInt(managementFee)/100);
  property.monthlyPropertyTaxes = annualPropertyTaxes / 12;
  property.monthlyExpenses = electricity+waterAndSewer+garbage+pmi+hoas+monthlyInsurance+propertyTaxes+otherExpenses;

  return (
    <Row>
      <PieGraph data={property}/>
    </Row>
  );
}

export default Analysis;