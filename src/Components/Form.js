import React, { useContext } from 'react';
import FormContainer from './FormContainer';
import { PropertiesConsumer } from '../Providers/PropertiesProvider';

import { UserContext } from '../Providers/UserProvider';

function Home (props) {
	let routingProps = props;
	const user = useContext(UserContext);
	
	return(
		<PropertiesConsumer>
		{(props) => (
			<FormContainer routingProps={routingProps} user={user} {...props} />
		)}
		</PropertiesConsumer>
	)
};

export default Home;