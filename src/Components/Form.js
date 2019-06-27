import React from 'react';
import FormContainer from './FormContainer';
import { PropertiesConsumer } from './PropertiesProvider';

function Home (props) {
    let routingProps = props;
    
	return(
		<PropertiesConsumer>
		{(props) => { 
			return(
			<div>
				<FormContainer properties={props.state.properties} 
				handleEdit={props.handleEdit}
                handleUpdate={props.handleUpdate}
                routingProps={routingProps}
                {...props}
				/>
			</div>
		) }}
		</PropertiesConsumer>
	)
};

export default Home;