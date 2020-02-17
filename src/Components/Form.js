import React, { useContext } from 'react';
import FormContainer from './FormContainer';
import { PropertiesConsumer } from '../Providers/PropertiesProvider';

import { UserContext } from '../Providers/UserProvider';

function Home (props) {
	let routingProps = props;
	const user = useContext(UserContext) || {};

	if (!user.hasOwnProperty('uid')){
      return (<></>)
    }
	
	return(
		<PropertiesConsumer>
		{(props) => (
			<FormContainer routingProps={routingProps} {...props} user={user} />
		)}
		</PropertiesConsumer>
	)
};

export default Home;