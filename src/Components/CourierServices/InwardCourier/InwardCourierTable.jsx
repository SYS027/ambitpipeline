import React from "react";
import { Table } from "react-bootstrap";

const tableHeaders = [
  "Sr.No.",
  "Date",
  "Time",
  "Unique Inward No.",
  "Shipper Name",
  "Department",
  "Consignee Name",
  "Consignee's Company Name",
  "Pincode",
  "Courier",
  "Location",
  "Mobile No.",
  "Courier TYPE",
  "Courier Type Code",
  "Type Of Courier",
  "No. of Letters",
  "Reverse Pickup Token No.",
  "Consignment No.",
  "Courier Co. Name",
  "Description",
  "Code",
  "Received Name",
  "Remarks",
  "Returns Courier Airway Bill Nos.",
  "Error Code",
  "Return Courier Reason",
];

const tableData = [
  {
    srNo: "01",
    date: "01/05/2024",
    time: "12:45",
    uniqueInwardNo: "381",
    shipperName: "Sakshi Sankhe",
    department: "Web Developer",
    consigneeName: "Snkit Soni",
    consigneeCompanyName: "Reliance Pvt.",
    pincode: "48325",
    courier: "Speed Post",
    location: "Mumbai",
    mobileNo: "6261446325",
    courierType: "Air Courier",
    courierTypeCode: "12546",
    typeOfCourier: "Non Doc",
    noOfLetters: "2",
    reversePickupTokenNo: "T145526",
    consignmentNo: "45125",
    courierCoName: "Anup Soni",
    description: "-",
    code: "45612",
    receivedName: "Ankit Soni",
    remarks: "-",
    returnsCourierAirwayBillNos: "14562",
    errorCode: "47895",
    returnCourierReason: "Bed Quality",
  },
];
const InwardCourierTable = () => {
  return (
    <div className="schroll" card>
      <Table striped bordered hover style={{ whiteSpace: "pre" }}>
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

export default InwardCourierTable;
