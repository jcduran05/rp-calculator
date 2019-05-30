import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";

function UserReports(props) {
    let { properties } = props;
    
    let propertiesArr = properties.map((property, idx) => {
        console.log(property);
        return (
        <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{property.reportTitle}</td>
            <td><Link to={`/show/${property.key}`}>Report</Link></td>
        </tr>
        )
    });
    
	return (
		<Row className="row-border">
            <Col md={12}>
			<Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Analysis</th>
                    </tr>
                </thead>
                <tbody>
                    {propertiesArr}
                </tbody>
            </Table>
            </Col>
		</Row>
	);
}

export default UserReports;
