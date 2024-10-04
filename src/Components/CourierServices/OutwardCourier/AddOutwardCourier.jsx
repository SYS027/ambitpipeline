import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { Title } from "../../../Utils/Title/Title";

const AddOutwardCourier = () => {
  return (
    <Container fluid className="card">
      <Title title="Outward Courier" />
      <hr />
      <Form>
        <Row>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="referenceNo">
                Reference Unique No.
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="referenceNo"
                  aria-label="Reference Unique No."
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="date">Date</Form.Label>
              <InputGroup>
                <Form.Control type="date" id="date" aria-label="Date" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="time">Time</Form.Label>
              <InputGroup>
                <Form.Control type="time" id="time" aria-label="Time" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="pickupDate">Pickup Date</Form.Label>
              <InputGroup>
                <Form.Control
                  type="date"
                  id="pickupDate"
                  aria-label="Pickup Date"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="shipperName">Shipper Name</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="shipperName"
                  aria-label="Shipper Name"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="senderDeptCode">
                Sender's Department Code
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="senderDeptCode"
                  aria-label="Sender's Department Code"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="consigneeName">Consignee Name</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="consigneeName"
                  aria-label="Consignee Name"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="consigneeCompanyName">
                Consignee's Company Name
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="consigneeCompanyName"
                  aria-label="Consignee's Company Name"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="airwayBillNo">AirWay Bill No.</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="airwayBillNo"
                  aria-label="AirWay Bill No."
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="pincode">Pincode</Form.Label>
              <InputGroup>
                <Form.Control type="number" id="pincode" aria-label="Pincode" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="destination">Destination</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="destination"
                  aria-label="Destination"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="state">State</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="state" aria-label="State" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="consigneeMobile">
                Consignee Mobile No
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="consigneeMobile"
                  aria-label="Consignee Mobile No"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="internalCourierSlipNo">
                Internal Courier Slip No.
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="internalCourierSlipNo"
                  aria-label="Internal Courier Slip No."
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="courierAccountCode">
                Courier Account Code
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="courierAccountCode"
                  aria-label="Courier Account Code"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="courierCompanyName">
                Courier Company Name
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="courierCompanyName"
                  aria-label="Courier Company Name"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="officialOrPersonal">
                Official Or Personal
              </Form.Label>
              <InputGroup>
                <Form.Control
                  as="select"
                  id="officialOrPersonal"
                  aria-label="Official Or Personal"
                >
                  <option value="1">Official</option>
                  <option value="2">Personal</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="courierTypeCode">
                Courier Type Code
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="courierTypeCode"
                  aria-label="Courier Type Code"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="courierType">Courier TYPE</Form.Label>
              <InputGroup>
                <Form.Control
                  as="select"
                  id="courierType"
                  aria-label="Courier Type"
                >
                  <option value="1">Air</option>
                  <option value="2">Road</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="description">Description</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="description"
                  aria-label="Description"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="courierCharge">Courier Charge</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="courierCharge"
                  aria-label="Courier Charge"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="amount">Amount</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="amount" aria-label="Amount" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="remark">Remark</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="remark" aria-label="Remark" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="status">Status</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="status" aria-label="Status" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="pendingWith">Pending With</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="pendingWith"
                  aria-label="Pending With"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="contactNo">Contact No</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="contactNo"
                  aria-label="Contact No"
                />
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>

        <Row className="text-end mb-3">
          <Col md={12}>
            <Button variant="outline-secondary" className="me-2">
              Cancel
            </Button>
            <Button variant="secondary">Save</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default AddOutwardCourier;
