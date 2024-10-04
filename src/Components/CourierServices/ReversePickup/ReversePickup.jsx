import React from "react";
import { Dropdown, Row, Form, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Title } from "../../../Utils/Title/Title";
import ReversePickupTable from "./ReversePickupTable";

const ReversePickup = () => {
  return (
    <Row className="me-1 ms-1">
      <Card>
      <Title title="Reverse Pickup"/>
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
            <img src="/images/download.svg" alt="" />
            <Link to="" className="ms-3 ms-lg-auto">
              <Button variant="dark" >
                Add New
              </Button>
            </Link>
          </div>
          <ReversePickupTable />
        </Card.Body>
      </Card>
    </Row>
  );
};

export default ReversePickup;
