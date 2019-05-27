import React from 'react';
import './App.css';
import { Col, Row, Form } from 'react-bootstrap';

function Analysis() {
  return (
    <Row>

        <Form.Group controlId="rpTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="input" />
            <Form.Text className="text-muted">
            What do you want to name this report?
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="rpAddress">
            <Form.Label>Property Address</Form.Label>
            <Form.Control type="input" />
        </Form.Group>

    </Row>
  );
}

export default Analysis;