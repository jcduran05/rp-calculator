import React from 'react';
import FormContainer from './FormContainer';
import { PropertiesConsumer } from './PropertiesProvider';

function Home (props) {
    let routingProps = props;
    
	return(
		<PropertiesConsumer>
		{(props) => (
			<FormContainer routingProps={routingProps} {...props} />
		)}
		</PropertiesConsumer>
	)
};

export default Home;