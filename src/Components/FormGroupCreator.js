import React from 'react';
import { Col, Form } from 'react-bootstrap';

function FormGroupCreator(props) {
	console.log("==========");
	console.log(props);
	console.log("==========");

	let formattedLabel = props.id.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
	formattedLabel = formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1);

	let groupDetails= {
		id: props.id,
		label: formattedLabel,
		classes: '',
 		type: props.details.type,
		size: {
			md: 12
		}
	}

	let formType = [];
	if (groupDetails.type == 'input') {
		formType.push(<Form.Control 
			key={props.id} 
			type="input"
			value=""
			placeholder="$" 
		/>);
	}


	return (
		<Col md={groupDetails.size.md}>
			<Form.Group controlId={groupDetails.id}>
				<Form.Label>{groupDetails.label}</Form.Label>
				{formType}
			</Form.Group>
		</Col>
	)
};

export default FormGroupCreator;