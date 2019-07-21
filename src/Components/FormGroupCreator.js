import React from 'react';
import { Col, Form } from 'react-bootstrap';

function FormGroupCreator(props) {
	const { formDetails } = props;
	let changeHandler = props.onChange;
	let formGroupState = props.state[props.id]
	let formattedLabel = props.id.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
	formattedLabel = formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1);

	let formType = [];
	if (formDetails.type === 'input') {
		formType.push(<Form.Control 
			key={props.id}
			name={props.id}
			type="input"
			value={formGroupState}
			placeholder={formDetails.placeholder}
			onChange={changeHandler}
		/>);
	}

	return (
		<Col sm={formDetails.size.default} md={formDetails.size.default}>
			<Form.Group controlId={props.id}>
				<Form.Label>{formattedLabel}</Form.Label>
				{formType}
			</Form.Group>
			<Form.Control.Feedback type="invalid">
            Please provide a valid state.
         	</Form.Control.Feedback>
		</Col>
	)
};

export default FormGroupCreator;