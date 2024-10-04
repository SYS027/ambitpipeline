import React from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { Title } from "../../../Components/Title/Title";
import CustomInput from "../../../Components/CustomInput/CustomInput";

const AddInwardCourier = () => {
  return (
    <Container fluid className="card">
      <Title title="Add Courier" />
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
            <CustomInput type="text" labelName="Shipper Name" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Shipper Department"
              placeholder=""
            />
          </Col>

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
            <CustomInput type="text" labelName="Location" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Pin Code" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Mobile No." placeholder="" />
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
            <CustomInput
              type="text"
              labelName="Courier Type Code"
              placeholder=""
            />
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
            <CustomInput
              type="text"
              labelName="No. of Letters"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Reverse Pickup Token No."
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Consignment No."
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Courier Co. Name"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Received Name" placeholder="" />
          </Col>

          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Error Code" placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Code" placeholder="" />
          </Col>

          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Returns Courier Airway Bill No."
              placeholder=""
            />
          </Col>

          <Col md={3} className="my-2">
            <Form.Label>Upload Document</Form.Label>
            <Form.Control type="file" />
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="RejectionReason">
                Return Courier Reason
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
              <Form.Label htmlFor="Description">Description</Form.Label>
              <InputGroup>
                <Form.Control as="textarea" id="Description" placeholder="" />
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
