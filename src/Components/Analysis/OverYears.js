import React from 'react';
import { Col, Row, Table, Button } from 'react-bootstrap';
import LineGraph from './LineGraph';

function OverYears(props) {
		const p = props.data;
		const years = [1,2,3,5,10,15,20,30];

		const yearsHead = years.map((th, idx) => {
			return (
				<th key={th}>Year {th}</th>
			)
		});

		let currentValue = 0;
		let propertyValueArr = [];
		const propertyValueTR = years.map((td, idx) => {
			if (currentValue === 0) currentValue = parseInt(p.purchasePrice)
			currentValue = Math.floor(currentValue * (1 + (parseInt(p.annualPVGrowth)/100)))

			propertyValueArr.push(currentValue);
			return (
				<td key={td}>{currentValue}</td>
			)
		});

		const pmt = (rate,nper,pv) => {
			let pvif, pmt;
	
			pvif = Math.pow( 1 + rate, nper);
			pmt = rate / (pvif - 1) * -(pv * pvif);   
	
			return pmt;
	}

	const computeSchedule = (loan_amount, interest_rate, payments_per_year, years, payment) => {
			let schedule = [];
			let remaining = loan_amount;
			let number_of_payments = payments_per_year * years;
	
			for (let i=0; i<=number_of_payments; i++) {
				let interest = remaining * (interest_rate/100/payments_per_year);
				let principle = (payment-interest);
				let row = [i, principle>0?(principle<payment?principle:payment):0, interest>0?interest:0, remaining>0?remaining:0];
				schedule.push(row);
				remaining -= principle
			}
	
			return schedule;
	}

	let l_amount = 229000;
	let l_ir = 3.9;
	let l_ppy = 12;
	let l_y = 30;
	let l_p = 1080.12;
	// console.log(computeSchedule(l_amount, l_ir, l_ppy, l_y, l_p))
	let testSchedule = computeSchedule(l_amount, l_ir, l_ppy, l_y, l_p);

    return (
			<Row className="row-border">
				<Col md={12}>
				<Table responsive>
					<thead>
						<tr>
							<th></th>
							{ yearsHead }
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Propert Value</th>
							{propertyValueTR}
						</tr>
					</tbody>
				</Table>
				<br/>
				<LineGraph data={p} schedule={testSchedule} propertyValue={propertyValueArr} years={years} />
				</Col>
			</Row>
    );
  }

export default OverYears;
