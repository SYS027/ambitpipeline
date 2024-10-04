import React from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Dropdown,
  Form,
  Button,
  Pagination,
  Table,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const tableHeaders = [
  "SR No.",
  "Days",
  "Reference Unique No.",
  "Month",
  "Pickup Date",
  "Sender's Name",
  "Sender's Department Code",
  "Consignee Name",
  "Consignee's Company Name",
  "AirWay Bill No.",
  "Pin Code",
  "Destination",
  "State",
  "Consignee Mobile No.",
  "Internal Courier Slip No.",
  "Courier Account Code",
  "Courier Company Name",
  "Official Or Personal",
  "Courier Type Code",
  "Type of Courier",
  "D=Domestic L=Local I=International",
  "Courier Weight",
  "Code",
  "Courier Type",
  "Description",
  "Pickup Date2",
  "Sender's Name3",
  "Consignee Name4",
  "AirWay Bill No.5",
  "Date of Courier Delivery",
  "Time of Delivery",
  "Recipient Name",
  "Courier Status",
  "Return Courier Airway Bill No.",
  "Reason",
  "Remarks",
  "Column1",
];

const tableData = [
  {
    srNo: "01",
    days: "5",
    referenceUniqueNo: "518",
    month: "September",
    pickupDate: "19/02/2024",
    senderName: "vikky parmar",
    senderDepartmentCode: "1503",
    consigneeName: "Amit Soni",
    consigneeCompanyName: "Reliance pvt.",
    airWayBillNo: "52",
    pinCode: "483225",
    destination: "Bhopal",
    state: "Madhya Pradesh",
    consigneeMobileNo: "6261446325",
    internalCourierSlipNo: "1245",
    courierAccountCode: "145256256",
    courierCompanyName: "Ambit",
    officialOrPersonal: "Personal",
    courierTypeCode: "14568",
    typeOfCourier: "Air",
    domesticLocalInternational: "-",
    courierWeight: "55Kg",
    code: "5246",
    courierType: "Express",
    description: "-",
    pickupDate2: "19/02/2024",
    senderName3: "vikky parmar",
    consigneeName4: "Amit Soni",
    airWayBillNo5: "52",
    dateOfCourierDelivery: "10/05/2024",
    timeOfDelivery: "15:00",
    recipientName: "Rohan Soni",
    courierStatus: "Delivered",
    returnCourierAirwayBillNo: "-",
    reason: "N/A",
    remarks: "-",
    column1: "Data",
  },
];

const OutwardCourierTable = () => {
  return (
    <div className="schroll">
      <Table
        striped
        bordered
        hover
        className="m-0"
        style={{ whiteSpace: "pre" }}
      >
        <thead>
          <tr>
            {tableHeaders.map((header, index) => (
              <th key={index} className="text-white bg-danger">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {tableHeaders.map((header, headerIndex) => (
                <td key={headerIndex} className="text-center">
                  {row[Object.keys(row)[headerIndex]] || "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default OutwardCourierTable;
