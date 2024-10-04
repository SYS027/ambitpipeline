import React from 'react'
import { Dropdown, Row, Form, Card, Button} from "react-bootstrap";
import { Title } from '../../../Components/Title/Title';
import { Link } from 'react-router-dom';
import VendorManagementTable from './VendorManagementTable';

const VendorManagement = () => {
  return (
    <Row className="me-1 ms-1">
      <Card>
      <Title title="Vendor Management"/>
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
            <Link to="/addvendor" className="ms-3 ms-lg-auto">
              <Button variant="dark" >
                Add New
              </Button>
            </Link>
          </div>
          <VendorManagementTable/>
        </Card.Body>
      </Card>
    </Row>
  )
}

export default VendorManagement