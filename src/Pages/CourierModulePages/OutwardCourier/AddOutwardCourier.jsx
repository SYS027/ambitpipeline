import React from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { Title } from "../../../Components/Title/Title";
import CustomInput from "../../../Components/CustomInput/CustomInput";

const AddOutwardCourier = () => {
  return (
    <Container fluid className="card">
      <Title title="Outward Courier" />
      <hr />
      <Form>
        <Row>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Reference Unique No."
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="date" labelName="Pickup Date" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Sender Name" placeholder="" />
          </Col>

          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Sender's Department Code"
              placeholder=""
            />
          </Col>
          {/* <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Shipper Name" placeholder="" />
          </Col> */}
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Consignee Name"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Consignee's Company Name"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="AirWay Bill No."
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Pincode" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Destination" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="State" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Consignee Mobile No"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Internal Courier Slip No."
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Courier Account Code"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Courier Company Name"
              placeholder=""
            />
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
            <CustomInput
              type="text"
              labelName="Courier Type Code"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="courierType">Type of Courier</Form.Label>
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
              <Form.Label htmlFor="courierType">DLI Courier</Form.Label>
              <InputGroup>
                <Form.Control
                  as="select"
                  id="courierType"
                  aria-label="Courier Type"
                >
                  <option value="1">Domestic</option>
                  <option value="2">Local</option>
                  <option value="2">International</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>

          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Courier Weight"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Code" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Courier Type" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Description" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="date" labelName="PickUp Date2" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Sender Name3" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Consignee Name4"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="date"
              labelName="Date of courier Delivery"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="time"
              labelName="Time Of Delivery"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Recipient Name"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Courier Status"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Return Courier Airway Bill No"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Reason" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Column1" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <Form.Label>Upload Document</Form.Label>
            <Form.Control type="file" />
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="RejectionReason">Remark</Form.Label>
              <InputGroup>
                <Form.Control as="textarea" id="Remark" placeholder="" />
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
