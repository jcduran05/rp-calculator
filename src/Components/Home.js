import React from 'react';
import UserReports from './UserReports';
import { PropertiesConsumer } from './PropertiesProvider';

function Home (props) {
	return(
		<PropertiesConsumer>
		{(props) => (
			<div>
				<UserReports properties={props.properties} />
			</div>
		)}
		</PropertiesConsumer>
	)
};

export default Home;
