import React from "react";
import { Dropdown, Row, Form, Card, Button, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Title } from "../../../Utils/Title/Title";
import CourierReportTable from "./CourierReportTable";

const CourierReport = () => {
  return (
    <Row className="me-1 ms-1">
      <Card>
        <Title title="Courier Report" />
        <Card.Body>
          <div className="d-flex align-items-center">
            <Dropdown className="me-3">
              <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                Select Column
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Option 1</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form className="d-flex">
              <Form.Select
                aria-label="Default select example"
                className="form-select"
              >
                <option value="">Show</option>
                <option value="1">10</option>
                <option value="2">20</option>
                <option value="3">50</option>
              </Form.Select>
            </Form>
            <Col md={2} className="mb-4 mx-2">
              <Form>From Date</Form>
              <Form.Control type="date" />
            </Col>
            <Col md={2} className="mb-4 mx-2">
              <Form>To Date</Form>
              <Form.Control type="date" />
            </Col>
            <Col md={1} className="d-flex align-items-center">
              <Image src="/images/download.svg" alt="" />
            </Col>
            <Col md={2}>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="ms-3 ms-lg-auto"
              />
            </Col>
            <Link to="" className="ms-3 ms-lg-auto">
              <Button variant="dark">Search</Button>
            </Link>
          </div>
          <CourierReportTable />
        </Card.Body>
      </Card>
    </Row>
  );
};

export default CourierReport;
