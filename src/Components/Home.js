import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import UserReports from './UserReports';
import { PropertiesConsumer } from './PropertiesProvider';

const Home = () => (
	<PropertiesConsumer>
	{(props) => (
	<div>
		<UserReports properties={props.properties} />
	</div>
	)}
	</PropertiesConsumer>
)

export default Home;
