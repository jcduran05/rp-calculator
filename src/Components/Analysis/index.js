import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Analysis(props) {
  let { formState } = props;
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
  } = formState;

  //Income
  let monthlyIncome = parseInt(totalGrossMonthlyIncome) + parseInt(otherMonthlyIncome);
  // Expenses breakdown
  let { vacancyMonthly,
    maintenanceMonthly,
    capitalExpenditureMonthly,
    managementFeeMonthly} = 0;
  vacancyMonthly = monthlyIncome * (parseInt(vacancy)/100);
  maintenanceMonthly = monthlyIncome * (parseInt(maintenance)/100);
  capitalExpenditureMonthly = monthlyIncome * (parseInt(capitalExpenditure)/100);
  managementFeeMonthly = monthlyIncome * (parseInt(managementFee)/100);

  propertyTaxes = annualPropertyTaxes / 12;
  let monthlyExpenses = electricity+waterAndSewer+garbage+pmi+hoas+monthlyInsurance+propertyTaxes+otherExpenses;

  return (
    <Row>
    </Row>
  );
}

export default Analysis;