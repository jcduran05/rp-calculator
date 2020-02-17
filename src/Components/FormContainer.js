import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { firestore } from '../firebase.js'; // configs ignored file
import './App.css';
import { Form, Button } from 'react-bootstrap';
import formDetails from './FormData';
import PropertyInfo from './PropertyInfo';
import PurchaseInfo from './PurchaseInfo';
import RentalInfo from './RentalInfo';

class FormContainer extends Component {
  constructor(props) {
    super(props)

    const formSections = ['propertyInfo', 'purchaseInfo', 'rentalInfo']
    let formValidationObj = {}
    formSections.forEach (s => {
      for (let key in formDetails[s]) {
        if (formDetails[s][key].hasOwnProperty('validation')) {
          formValidationObj[key] = formDetails[s][key]['validation']
        }
      }
    })

    this.state = {
      isEdit: false,
      property: {},
      isValid: true,
      formValidation: formValidationObj,
    }

    this.initialState = this.initialState.bind(this)
    this.changeHandler = this.changeHandler.bind(this)
    this.submitFormHandler = this.submitFormHandler.bind(this)
  }

  componentWillMount() {
    this.initialState()
  }

  initialState = () => {
    let properties = this.props.state.properties
    let propertyId = this.props.routingProps.match.params.id
    let user = this.props.user
    if (propertyId && user) {
      return this.setState({
        isEdit: true,
        property: properties[propertyId],
      })
    }

    const formSections = ['propertyInfo', 'purchaseInfo', 'rentalInfo']
    let propertyObj = {}
    formSections.forEach (s => {
      for (let key in formDetails[s]) {
        if (formDetails[s][key].hasOwnProperty('validation')) {
          propertyObj[key] = ''
        }
      }
    })
    return this.setState({property: propertyObj})
  }

  changeHandler = event => {
    const name = event.target.id;
    const value = event.target.value;
    this.setState(prevState => ({ property: {
        ...prevState.property,
        [name]: value
      }
    })
    )
  }

  validHandler = (id, bool) => {
    // console.log("valid hdnadler :", event)
    this.setState(prevState => ({ formValidation: {
          ...prevState.formValidation,
          [id]: bool
        }
      })
    )
    // this.setState({isValid: false})
  }

  submitFormHandler = event => {
    event.preventDefault();
    let propertyObj = this.state.property

    for (let validationKey in this.state.formValidation) {
      let validationObject = this.state.formValidation[validationKey]
      //FormCreatorValidation(validationObject)
      if (validationObject.notNull && this.state.property[validationKey].length === 0) {
        this.setState(prevState => ({ formValidation: {
              ...prevState.formValidation,
              [validationKey]: {
                ...prevState.formValidation[validationKey],
                isValid: false
              } 
            }
          })
        )
      } else {
        this.setState(prevState => ({ formValidation: {
              ...prevState.formValidation,
              [validationKey]: {
                ...prevState.formValidation[validationKey],
                isValid: true
              } 
            }
          })
        )
        this.setState({isValid: true})
      }
    }

    // let errList = Object.keys(this.state.formErrors).map (errKey => {
    //   console.log(propertyObj[errKey])
    //   console.log(errKey)
    //   if(propertyObj[errKey].length === 0) this.setState(prevState => ({isValid: false, formErrors: {...prevState.property, [errKey]: `${errKey} This field is required.` }}))
    // });

    // console.log(this.state.formErrors)

    if (this.state.isValid) {

      if (this.state.isEdit) {
        const updatedProperty = {}
        // updatedProperty[`/properties/${this.state.uid}/${this.state.property.firebaseKey}`] = this.state.property
        // return firebase.database().ref().update(updatedProperty)
        return firestore.collection('properties').update({...this.state.property})
      } else {
        // Setting up properties "table" and push adds new object instead up
        // resetting a single object. Promise but no helpful server side error msgs
        // const propertiesRef = firebase.database().ref('properties');
        // const resetstate = this.initialState();
        // this.setState(resetstate)
        // return propertiesRef.push({...this.state.property})

        // console.log("----")
        // console.log(firestore.collection('users').doc(`${this.state.uid}`))
        // console.log("----")
        return firestore.collection('properties').add({...this.state.property})
      }

    } else {
      console.log("was not valid")
      return
    }
  }

  render() {
    return (
      <Form onSubmit={this.submitFormHandler}>
        <PropertyInfo state={this.state} 
        formDetails={formDetails.propertyInfo} 
        onChange={this.changeHandler}
        validHandler={this.validHandler}
        />
        <PurchaseInfo state={this.state} 
        formDetails={formDetails.purchaseInfo} 
        onChange={this.changeHandler}
        validHandler={this.validHandler}
        />
        <RentalInfo state={this.state} 
        formDetails={formDetails.rentalInfo} 
        onChange={this.changeHandler}
        validHandler={this.validHandler}
        />
        <Button variant="primary" type="submit">
            Submit
        </Button>
        {!this.state.isValid && <div><br/><div className="alert alert-danger" role="alert">Please fill out the form.</div></div>}
      </Form>
    )
  }
};

// FormContainer.propTypes = {
//   reportTitle: PropTypes.string.isRequired,
//   propertyAddress: PropTypes.string.isRequired,
//   city: PropTypes.string.isRequired,
//   state: PropTypes.string.isRequired,
//   zip: PropTypes.number,
//   annualPropertyTaxes: PropTypes.number,
//   downPaymentPercent: PropTypes.number,
//   loanInterestRate: PropTypes.number,
//   amortizedOverHowManyYears: PropTypes.number,
//   totalGrossMonthlyIncome: PropTypes.number,
//   propertyTaxes: PropTypes.number,
// };

export default FormContainer;