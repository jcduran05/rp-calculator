import React, { Component } from 'react';
import firebase from '../firebase.js'; // configs ignored file
import { useInput } from '../Hooks/InputHook';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container, Col, Form, Button } from 'react-bootstrap';
import Home from './Home';
import Analysis from './Analysis';
import FormContainer from './FormContainer';

/* Things to do
1. Find way to make sure state and formData match
2. onChange should not change int to strings
3. Add routing to break form into sections and final analysis page
4  Storage through firebase to retrieve old reports
*/

class App extends Component {
	constructor(props) {
		super(props);
	
		this.state = {
		  loading: true,
		  properties: []
		} 
  }
  
  componentDidMount() {
		const propertiesRef = firebase.database().ref('properties');
		propertiesRef.on('value', (snapshot) => {
		  let properties = snapshot.val();
      let newState = [];
      let keyCounter = 0;
		  for (let property in properties) {
        properties[property].key = keyCounter;
        newState.push(properties[property]);
        keyCounter++;
		  }
		  this.setState({
			  properties: newState
		  });
		});
	}

  render() {
    // Initial html when data hasn't been received
    if (Object.keys(this.state.properties).length === 0) {
      return (
        <div>
          <div className="col-md-12">loading ...</div>
        </div>
      )
    }

    return (
      <Router>
        <div className="App">
          <Container>
            <Col md={12}>
              <Route exact path="/" render={props => <Home {...props} properties={this.state.properties} />} />
              <Route exact path="/create" component={FormContainer} />
              <Route exact path="/show/:id" render={props => <Analysis {...props} properties={this.state.properties} />} />
            </Col>
          </Container>
        </div>
      </Router>
    )
  }
};

export default App;
