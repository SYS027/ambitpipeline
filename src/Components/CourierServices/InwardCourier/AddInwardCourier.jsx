import React from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { Title } from "../../../Utils/Title/Title";

const AddInwardCourier = () => {
  return (
    <Container fluid className="card">
      <Title title="Inward Courier" />
      <hr />
      <Form>
        <Row>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="InwardNumber">
                Unique Inward Number
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="InwardNumber"
                  placeholder=""
                  aria-label="Unique Inward Number"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Date">Date</Form.Label>
              <InputGroup>
                <Form.Control
                  type="date"
                  id="Date"
                  placeholder=""
                  aria-label="Date"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Time">Time</Form.Label>
              <InputGroup>
                <Form.Control
                  type="time"
                  id="Time"
                  placeholder=""
                  aria-label="Time"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="ShipperName">Shipper Name</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="ShipperName"
                  placeholder=""
                  aria-label="Shipper Name"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Department">Department</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="Department"
                  placeholder=""
                  aria-label="Department"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="ConsigneeName">Consignee Name</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="ConsigneeName"
                  placeholder=""
                  aria-label="Consignee Name"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="ConsigneesCompanyName">
                Consignee's Company Name
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="ConsigneesCompanyName"
                  placeholder=""
                  aria-label="Consignee's Company Name"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Location">Location</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="Location"
                  placeholder=""
                  aria-label="Location"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="PinCode">Pin Code</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="PinCode"
                  placeholder=""
                  aria-label="Pin Code"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="MobileNo">Mobile No.</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="MobileNo" placeholder="" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="CourierType">Courier Type</Form.Label>
              <InputGroup>
                <Form.Control
                  as="select"
                  id="CourierType"
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
              <Form.Label htmlFor="CourierTypeCode">
                Courier Type Code
              </Form.Label>
              <InputGroup>
                <Form.Control type="text" id="CourierTypeCode" placeholder="" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="TypeOfCourier">Type Of Courier</Form.Label>
              <InputGroup>
                <Form.Control
                  as="select"
                  id="TypeOfCourier"
                  aria-label="Type Of Courier"
                >
                  <option value="1">Doc</option>
                  <option value="2">Non-Doc</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Courier">Courier Mode</Form.Label>
              <InputGroup>
                <Form.Control
                  as="select"
                  id="Courier"
                  aria-label="Courier Mode"
                >
                  <option value="1">Courier</option>
                  <option value="2">Speed post</option>
                  <option value="3">Hand-Delivery</option>
                  <option value="4">Reverse Pickup</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="NoOfLetters">No. of Letters</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="NoOfLetters" placeholder="" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="ReversePickupTokenNo">
                Reverse Pickup Token No.
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="ReversePickupTokenNo"
                  placeholder=""
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="ConsignmentNo">Consignment No.</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="ConsignmentNo" placeholder="" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="CourierCoName">Courier Co. Name</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="CourierCoName" placeholder="" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Description">Description</Form.Label>
              <InputGroup>
                <Form.Control as="textarea" id="Description" placeholder="" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Code">Code</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="Code" placeholder="" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Remarks">Remarks</Form.Label>
              <InputGroup>
                <Form.Control as="textarea" id="Remarks" placeholder="" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="ReturnsCourierAirwayBillNo">
                Returns Courier Airway Bill No.
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="ReturnsCourierAirwayBillNo"
                  placeholder=""
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="RejectionReason">
                Rejection Reason
              </Form.Label>
              <InputGroup>
                <Form.Control
                  as="textarea"
                  id="RejectionReason"
                  placeholder=""
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="ReturnReceiptNo">
                Return Receipt No.
              </Form.Label>
              <InputGroup>
                <Form.Control type="text" id="ReturnReceiptNo" placeholder="" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="ReturnedBy">Returned By</Form.Label>
              <InputGroup>
                <Form.Control type="text" id="ReturnedBy" placeholder="" />
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="ReturnedOn">Returned On</Form.Label>
              <InputGroup>
                <Form.Control type="date" id="ReturnedOn" placeholder="" />
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

export default AddInwardCourier;
