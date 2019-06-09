import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import UserReports from './UserReports';

function Home(props) {
	return (
		<div>
			<Row className="row-border">
				<Col md={12}>
					<h4>Reports</h4>
					<Link to="/create">Create Report</Link>
				</Col>
			</Row>
			<UserReports properties={props.properties} />
		</div>
	  );
}

export default Home;
