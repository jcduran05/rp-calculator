import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import UserReports from './UserReports';

function Home(props) {
	return (
		<div>
			<UserReports properties={props.properties} />
		</div>
	  );
}

export default Home;
