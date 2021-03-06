import React, { Component } from 'react'
import firebase from '../firebase'
import { Redirect } from "react-router-dom";
// Set Up The Initial Context
const PropertiesContext = React.createContext()
// Create an exportable consumer that can be injected into components
export const PropertiesConsumer = PropertiesContext.Consumer
// Create the provider using a traditional React.Component class

class PropertiesProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      properties: [],
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
        properties[property].firebaseKey = property;
        newState.push(properties[property]);
        keyCounter++;
      }
      this.setState({
        properties: newState
      });
    });
  }

  handleDelete(id) {
    const propertiesRef = firebase.database().ref('properties');
    return propertiesRef.child(id).remove()
    .then(() => {
      console.log("property deleted")
    })
    .catch(error => {
      console.log(error);
    });
  }

  handleEdit(id) {
    return <Redirect to={`/edit/${id}`} />
  }

  render () {
    // Initial html when data hasn't been received
    // If no data, will need to comment out to reach create page
    if (Object.keys(this.state.properties).length === 0) {
      return (
        <div>
          <div className="col-md-12">loading ...</div>
        </div>
      )
    }
    
    return (
      // value prop is where we define what values 
      // that are accessible to consumer components
       <PropertiesContext.Provider value={{
         state: this.state, 
         handleDelete: this.handleDelete,
         handleEdit: this.handleEdit,
        }}>
        {this.props.children}
      </PropertiesContext.Provider>
    )
  }
}
export default PropertiesProvider