import React from 'react';
import { Col, Form } from 'react-bootstrap';

function FormGroupCreator(props) {
	const { formDetails } = props // formDetails
	const fd = formDetails;
	let changeHandler = props.onChange;
	let formGroupState = props.state[props.id]
	let formattedLabel = props.id.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
	formattedLabel = formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1);

	let formType = [];
	if (fd.type === 'input') {
		formType.push(<Form.Control 
			key={props.id}
			name={props.id}
			type="input"
			value={formGroupState}
			placeholder={fd.placeholder}
			onChange={changeHandler}
		/>);
	} else if (fd.type === 'select') {

	}

	let classNames = Object.keys(fd.size).map (sKey => {
		if (sKey == 'sm') { return `col-sm-${fd.size[sKey]}` } else { return `col-sm-${fd.size['default']}` };
		if (sKey == 'md') { return `col-md-${fd.size[sKey]}` } else { return `col-md-${fd.size['default']}` };
		if (sKey == 'lg') { return `col-lg-${fd.size[sKey]}` } else { return `col-lg-${fd.size['default']}` };
	})
	let classNamesFormatted = classNames.join(" ");

	return (
		// {!this.state.isValid && <div> {this.state.formErrors.reportTitle} </div>}
		<div className={classNamesFormatted}>
			<Form.Group controlId={props.id}>
				<Form.Label>{formattedLabel}</Form.Label>
				{formType}
			</Form.Group>
			<Form.Control.Feedback type="invalid">
            Please provide a valid state.
         	</Form.Control.Feedback>
		</div>
	)
};

export default FormGroupCreator;