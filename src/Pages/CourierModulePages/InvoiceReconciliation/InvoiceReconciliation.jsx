import React from "react";
import { Row, Dropdown, Form, Button, Card } from "react-bootstrap";
import "../../../Assets/css/CourierServices/CourierServices.css";
import { Link } from "react-router-dom";
import { Title } from "../../../Components/Title/Title";
import InvoiceReconciliationTable from "./InvoiceReconciliationTable";

const InvoiceReconciliation = ({ sidebarOpen }) => {
  return (
    <Row
      className={`me-1 ms-1 ${
        sidebarOpen ? "with-sidebar" : "without-sidebar"
      }`}
    >
      <Card>
        <Title title="Inward Courier" />
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
            <Link to="/addinwardcourier" className="ms-3 ms-lg-auto">
              <Button variant="dark">Add New</Button>
            </Link>
          </div>
          <InvoiceReconciliationTable />
        </Card.Body>
      </Card>
    </Row>
  );
};

export default InvoiceReconciliation;
