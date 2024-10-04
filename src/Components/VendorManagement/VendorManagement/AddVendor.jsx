import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  Tab,
  Tabs,
  Table,
} from "react-bootstrap";
import { Title } from "../../../Utils/Title/Title";
import { FaEllipsisH, FaPlus, FaTimesCircle } from "react-icons/fa";

const AddVendor = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <Container fluid className="card">
      <Title title="New Vendor" />
      <hr />
      <Form>
        <Row>
          {/* <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="InwardNumber">Salutation</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="InwardNumber"
                  placeholder=""
                  aria-label="Unique Inward Number"
                />
              </InputGroup>
            </Form.Group>
          </Col> */}
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Date">First Name</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="text"
                  placeholder=""
                  aria-label="text"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Time">Last Name</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="Name"
                  placeholder=""
                  aria-label="Name"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Courier">Categories</Form.Label>
              <InputGroup>
                <Form.Control
                  as="select"
                  id="Categories"
                  aria-label="Categories"
                >
                  <option value="1">Repair & Maintenance</option>
                  <option value="2">Electricity Bill</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Department">Company Name</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="Company Name"
                  placeholder=""
                  aria-label="Company Name"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="ConsigneeName">
                Vendor Display Name
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="Vendor Display Name"
                  placeholder=""
                  aria-label="Vendor Display Name"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="ConsigneesCompanyName">
                Vendor Email
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="Vendor Email"
                  placeholder=""
                  aria-label="Vendor Email"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="Vendor Phone">Vendor Phone</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="Vendor Phone"
                  placeholder=""
                  aria-label="Vendor Phone"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2">
            <Form.Group>
              <Form.Label htmlFor="PinCode">Mobile No.</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="Mobile No."
                  placeholder=""
                  aria-label="Mobile No."
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-2"></Col>
          <Col md={3} className="my-2"></Col>
          <Col md={3} className="my-2"></Col>
          <Tabs
            defaultActiveKey="self"
            id="myTab"
            className="my-3"
            transition={false}
          >
            <Tab eventKey="self" title="Add more Details"></Tab>
          </Tabs>
          {/* <Col md={3} className="my-3">
            <Form.Group>
              <Form.Label htmlFor="Department">Skype Name/Number</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="Skype Name/Number"
                  placeholder=""
                  aria-label="Skype Name/Number"
                />
              </InputGroup>
            </Form.Group>
          </Col> */}
          <Col md={3} className="my-3">
            <Form.Group>
              <Form.Label htmlFor="ConsigneeName">Designation</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="Designation"
                  placeholder=""
                  aria-label="Designation"
                />
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={3} className="my-3">
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
          <Col md={3} className="my-3">
            <Form.Group>
              <Form.Label htmlFor="Website">Website</Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  id="Website"
                  placeholder=""
                  aria-label="Website"
                />
              </InputGroup>
            </Form.Group>
          </Col>

          <Tabs
            defaultActiveKey="self"
            id="myTab"
            className="my-3"
            transition={false}
          >
            <Tab eventKey="self" title="Other Details">
              <Row>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="GST Treatment">
                      GST Treatment
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="select"
                        id="GST Treatment"
                        aria-label="GST Treatment"
                      >
                        <option value="1">Select A GST Treatment</option>
                        <option value="2">Register Business-Regular</option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="GSTIN/UIN">GSTIN/UIN</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="GSTIN/UIN"
                        placeholder=""
                        aria-label="GSTIN/UIN"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="PAN">PAN</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="PAN"
                        placeholder=""
                        aria-label="PAN"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Source of supply">
                      Source of supply
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="select"
                        id="Source of supply"
                        aria-label="Source of supply"
                      >
                        <option value="1">[MH]-Maharastra</option>
                        <option value="2">[GJ]-Gujrat</option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Currency">Currency</Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="select"
                        id="Currency"
                        aria-label="Currency"
                      >
                        <option value="1">INR-Indian Rupee</option>
                        <option value="2">USD-US Dollar</option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
                {/* <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Opening Balance">
                      Opening Balance
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="select"
                        id="Opening Balance"
                        aria-label="Opening Balance"
                      >
                        <option value="1">Head Office</option>
                        <option value="2"></option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col> */}
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="INR">INR</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="INR"
                        placeholder=""
                        aria-label="INR"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Payment Terms">
                      Payment Terms
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="select"
                        id="Payment Terms"
                        aria-label="Payment Terms"
                      >
                        <option value="1">Due on Receipt</option>
                        <option value="2">Net 15</option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="TDS">TDS</Form.Label>
                    <InputGroup>
                      <Form.Control as="select" id="TDS" aria-label="TDS">
                        <option value="1">Select a Tax</option>
                        <option value="2">
                          Payment of contractors for others-[2%]
                        </option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Price List">Price List</Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="select"
                        id="Price List"
                        aria-label="Price List"
                      >
                        <option value="1"></option>
                        <option value="2"></option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
                {/* <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Portal Language">
                      Portal Language
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="select"
                        id="Portal Language"
                        aria-label="Portal Language"
                      >
                        <option value="1">English</option>
                        <option value="2"></option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col> */}
                {/* <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Facebook">Facebook</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="Facebook"
                        placeholder="Username"
                        aria-label="Facebook"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Twitter">Twitter</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="Twitter"
                        placeholder="Username"
                        aria-label="Twitter"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col> */}
                <Col md={3} className="my-2">
                  <Form.Label>Upload Document</Form.Label>
                  <Form.Control type="file" onChange={handleFileChange} />
                </Col>
                <Col md={3} className="my-2"></Col>
                <Col md={6} className="my-2">
                  <Form.Group>
                    <Form.Check
                      type="checkbox"
                      id="Twitter"
                      label="Allow portal access for this vendor"
                      aria-label="Twitter"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="father" title="Address">
              <h6>BILLING ADDRESS</h6>
              <Row>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Address1">Address1</Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        id="Address1"
                        placeholder="Street1"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Address2">Address2</Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        id="Address2"
                        placeholder="Street2"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Country / Region">
                      Country / Region
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="select"
                        id="Country / Region"
                        aria-label="Country / Region"
                      >
                        <option value="1">India</option>
                        <option value="2"></option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="City">City</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="City"
                        placeholder=""
                        aria-label="City"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="State">State</Form.Label>
                    <InputGroup>
                      <Form.Control as="select" id="State" aria-label="State">
                        <option value="1">Select</option>
                        <option value="2"></option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Zip Code">Zip Code</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="Zip Code"
                        placeholder=""
                        aria-label="Zip Code"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Phone">Phone</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="Phone"
                        placeholder=""
                        aria-label="Phone"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Fax">Fax</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="Fax"
                        placeholder=""
                        aria-label="Fax"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
              <h6 className="my-3">SHIPPING ADDRESS</h6>
              <Row>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Address1">Address1</Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        id="Address1"
                        placeholder="Street1"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Address2">Address2</Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        id="Address2"
                        placeholder="Street2"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Country / Region">
                      Country / Region
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        as="select"
                        id="Country / Region"
                        aria-label="Country / Region"
                      >
                        <option value="1">India</option>
                        <option value="2"></option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="City">City</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="City"
                        placeholder=""
                        aria-label="City"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="State">State</Form.Label>
                    <InputGroup>
                      <Form.Control as="select" id="State" aria-label="State">
                        <option value="1">Select</option>
                        <option value="2"></option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Zip Code">Zip Code</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="Zip Code"
                        placeholder=""
                        aria-label="Zip Code"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Phone">Phone</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="Phone"
                        placeholder=""
                        aria-label="Phone"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Fax">Fax</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="Fax"
                        placeholder=""
                        aria-label="Fax"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="wife" title="Contact Persons">
              <Container fluid>
                <div className="table-responsive" style={{ maxHeight: "75vh" }}>
                  <Table bordered>
                    <thead>
                      <tr>
                        <th className="text-white bg-danger">Salutation</th>
                        <th className="text-white bg-danger">First Name</th>
                        <th className="text-white bg-danger">Last Name</th>
                        <th className="text-white bg-danger">Email Address</th>
                        <th className="text-white bg-danger">Work Phone</th>
                        <th className="text-white bg-danger">Mobile</th>
                        <th className="text-white bg-danger">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          <FaEllipsisH style={{ color: "green" }} />
                          <FaTimesCircle
                            style={{ color: "rgb(241, 95, 95)" }}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <Button variant="link" className="p-0">
                  <FaPlus /> Add Contact Person
                </Button>
              </Container>{" "}
            </Tab>
            <Tab eventKey="son" title="Bank Details">
              <Container>
                <Row className="text-center my-5">
                  <Col>
                    <h6>
                      Add your vendor's bank details and make payments directly
                      from..
                    </h6>
                    <div>
                      <Button variant="link" className="p-0">
                        <FaPlus /> Add Bank Account
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="mother" title="Custom Fields">
              <Row>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Phone">Area</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        id="Area"
                        placeholder=""
                        aria-label="Area"
                      />
                    </InputGroup>
                  </Form.Group>
                </Col>
                <Col md={3} className="my-2">
                  <Form.Group>
                    <Form.Label htmlFor="Vendor Code">Vendor Code</Form.Label>
                    <InputGroup>
                      <Form.Control as="select" id="State" aria-label="State">
                        <option value="1">Select</option>
                        <option value="2"></option>
                      </Form.Control>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="daughter" title="Reporting Tags">
              <Col md={3} className="my-2">
                <Form.Group>
                  <Form.Label htmlFor="Customer">Customer</Form.Label>
                  <InputGroup>
                    <Form.Control as="select" id="State" aria-label="State">
                      <option value="1">Select</option>
                      <option value="2"></option>
                    </Form.Control>
                  </InputGroup>
                </Form.Group>
              </Col>{" "}
            </Tab>
            <Tab eventKey="remark" title="Remark">
              <Col md={12} className="my-2">
                <Form.Group>
                  <Form.Label htmlFor="Remarks">
                    Remarks ( For Internal Use)
                  </Form.Label>
                  <InputGroup>
                    <Form.Control as="textarea" id="Remarks" placeholder="" />
                  </InputGroup>
                </Form.Group>
              </Col>{" "}
            </Tab>
          </Tabs>
          <Row className="text-end mb-3 my-3">
            <Col md={12}>
              <Button variant="outline-secondary" className="me-2">
                Cancel
              </Button>
              <Button variant="secondary">Save</Button>
            </Col>
          </Row>
        </Row>
      </Form>
    </Container>
  );
};

export default AddVendor;
