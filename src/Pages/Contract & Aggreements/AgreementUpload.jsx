import React, { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Title } from "../../Components/Title/Title";

const AgreementUpload = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = () => {
    if (!file || !name || !date) {
      alert("Please fill in all fields and select a file.");
      return;
    }
    // Handle file upload logic here
    console.log("File:", file);
    console.log("Name:", name);
    console.log("Date:", date);
  };

  return (
    <Row className="me-1 ms-1">
      <Card>
        <Title title="Upload Agreement Document" />
        <Card.Body>
          <Form>
            <Row className="align-items-center">
              <Col md={3} className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  onChange={handleNameChange}
                />
              </Col>
              <Col md={3} className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={handleDateChange}
                />
              </Col>
              <Col md={3} className="mb-3">
                <Form.Group>
                  <Form.Label htmlFor="courierType">Agreement Type</Form.Label>
                  <InputGroup>
                    <Form.Control
                      as="select"
                      id="courierType"
                      aria-label="Courier Type"
                    >
                      <option value="1"></option>
                      <option value="2"></option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3} className="mb-3">
                <Form.Label>Upload Agreement</Form.Label>
                <Form.Control type="file" onChange={handleFileChange} />
              </Col>
            </Row>
            <Col className="d-flex justify-content-around my-3">
              <Button variant="dark" onClick={handleSubmit}>
                Upload
              </Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default AgreementUpload;
