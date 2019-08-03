import React from 'react';
import { Col, Row } from 'react-bootstrap';
import FormGroupCreator from './FormGroupCreator';

function PropertyInfo(props) {
	let { formDetails, state } = props;
	let changeHandler = props.onChange;
	let validHandler = props.validHandler;
	let formComponents = [];

	for (let key in formDetails) {
		formComponents.push(<FormGroupCreator 
			key={key} 
			id={key}
			state={state}
			formDetails={formDetails[key]}
			onChange={changeHandler}
			validHandler={validHandler}
			/>)
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
