import React from 'react';
import { Col, Form } from 'react-bootstrap';

function FormGroupCreator(props) {
	const { formDetails } = props // formDetails
	const fd = formDetails;
	let changeHandler = props.onChange;
	let validHandler = props.validHandler;
	let formGroupState = props.state.property[props.id]
	let formattedLabel = props.id.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
	formattedLabel = formattedLabel.charAt(0).toUpperCase() + formattedLabel.slice(1);

	console.log(props.state.formValidation[props.id])
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

	let fieldErr = []
	if (props.state.formValidation[props.id] !== undefined) {
		let isInvalid = !props.state.formValidation[props.id].isValid
		let errMsg = props.state.formValidation[props.id].errMsg

		if (isInvalid) {
			fieldErr.push(<div><div className="alert alert-danger" role="alert"> {errMsg} </div></div>)
		}
	}

	return (
		<div className={classNamesFormatted}>
			<Form.Group controlId={props.id}>
				<Form.Label>{formattedLabel}</Form.Label>
				{formType}
				{props.state.formValidation[props.id] !== undefined && !props.state.formValidation[props.id].isValid ?
			 	<div className="invalid-feedback"> {props.state.formValidation[props.id].errMsg} </div> : null}
			</Form.Group>
		</div>
	)
};

export default FormGroupCreator;