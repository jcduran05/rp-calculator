import React from 'react';
import UserReports from './UserReports';
import { PropertiesConsumer } from '../Providers/PropertiesProvider';

function Home (props) {
	return(
		<PropertiesConsumer>
		{(props) => { 
			return(
			<div>
				<UserReports state={props.state} 
				handleDelete={props.handleDelete}
				handleEdit={props.handleEdit}
				handleUpdate={props.handleUpdate}
				/>
			</div>
		) }}
		</PropertiesConsumer>
	)
};

export default Home;
