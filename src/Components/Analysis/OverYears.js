import React from 'react';
import { Col, Row, Table, Button } from 'react-bootstrap';

function OverYears(props) {
		const p = props.data;		
		const years = [1,2,3,4,5,10,15,20,30];

		console.log(p);
		const yearsHead = years.map((th, idx) => {
			return (
				<th key={th}>Year {th}</th>
			)
		});

		let currentValue = 0;
		const propertyValueTR = years.map((td, idx) => {
			if (currentValue === 0) currentValue = parseInt(p.purchasePrice)
			currentValue = Math.floor(currentValue * (1 + (parseInt(p.annualPVGrowth)/100)))

			return (
				<td key={td}>{currentValue}</td>
			)
		});
  
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
				</Col>
			</Row>
    );
  }

export default OverYears;
