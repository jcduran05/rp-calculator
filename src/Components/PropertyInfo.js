import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FormGroupCreator from './FormGroupCreator';

function PropertyInfo(props) {
	let { formDetails } = props;
	// let formCompoents = formDetails.map((item) =>{
		console.log(formDetails)
	// });
	let formComponents = [];

	for (let key in formDetails) {
		formComponents.push(<FormGroupCreator 
			key={key} 
			id={key} 
			details={formDetails[key]}/>)
	}

	return (
		<Row className="row-border">
			<Col md={12}>
				<h4>Property Info</h4>
			</Col>
			{formComponents}
		</Row>
	);
}

export default PropertyInfo;
