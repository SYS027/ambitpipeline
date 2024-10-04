import React from "react";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomDropdown from "../../../Components/CustomDropdown/CustomDropdown";
import CustomSingleButton from "../../../Components/CustomSingleButton/CustomSingleButton";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import { Title } from "../../../Components/Title/Title";

const OutwardRequestForm = () => {
  return (
    <Container fluid className="card">
      <Title title="Outward Request Form" />
      <hr />
      <Form>
        <Row>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Courier Slip" placeholder="" />
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
              labelName="Name Of Sender"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Department Of Sender"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput type="text" labelName="Employee No." placeholder="" />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Name Of Client"
              placeholder=""
            />
          </Col>

          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Account Code No."
              placeholder=""
            />
          </Col>

          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Description">Address</Form.Label>
              <InputGroup>
                <Form.Control as="textarea" id="Address" placeholder="" />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="State"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="Country"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <CustomInput
              type="text"
              labelName="PinCode"
              placeholder=""
            />
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Remark">Remark</Form.Label>
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

export default OutwardRequestForm;
