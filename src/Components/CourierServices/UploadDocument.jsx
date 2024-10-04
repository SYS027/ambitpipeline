import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Title } from "../../Utils/Title/Title";

const UploadDocument = () => {
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
        <Title title="Upload Document" />
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
                <Form.Label>Upload Document</Form.Label>
                <Form.Control
                  type="file"
                  onChange={handleFileChange}
                />
              </Col>
              <Col md={3} className="text-end">
                <Button
                  variant="dark"
                  onClick={handleSubmit}
                >
                  Upload
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default UploadDocument;
