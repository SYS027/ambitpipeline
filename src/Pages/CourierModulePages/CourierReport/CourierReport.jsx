import React, { useState } from "react";
import CustomTable from "../../../Components/CustomeTable/CustomTable";
import * as XLSX from "xlsx";

const CourierReport = () => {
  const [value, setValue] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event, 10));
    setPage(0);
  };
  const tableData = [
    {
      srNo: "01",
      date: "09/04/2024",
      time: "12:15",
      uniqueInwardNo: "518",
      pickupDate: "19/02/2024",
      senderName: "vikky parmar",
      senderDeptCode: "1503",
      consigneeName: "Amit Soni",
      "consigneeCo. Name": "Reliance pvt.",
      airWayBillNo: "52",
      pinCode: "483225",
      destination: "Bhopal",
      state: "Madhya Pradesh",
      consigneeMobileNo: "6261446325",
      intCourierSlipNo: "1245",
      courierAccountCode: "145256256",
      "courierCo. Name": "Ambit",
      officialOrPersonal: "Personal",
      courierTypeCode: "14568",
      typeOfCourier: "Air",
      "Dom,Int,Local": "-",
      "courier Wt": "55Kg",
      code: "5246",
      description: "-",
    },
    // Added dummy data entries
    {
      srNo: "02",
      date: "09/05/2024",
      time: "14:30",
      uniqueInwardNo: "519",
      pickupDate: "20/02/2024",
      senderName: "John Doe",
      senderDeptCode: "1504",
      consigneeName: "Rahul Verma",
      "consigneeCo. Name": "Infosys Ltd.",
      airWayBillNo: "53",
      pinCode: "110045",
      destination: "Delhi",
      state: "Delhi",
      consigneeMobileNo: "9876543210",
      intCourierSlipNo: "1246",
      courierAccountCode: "145256257",
      "courierCo. Name": "BlueDart",
      officialOrPersonal: "Official",
      courierTypeCode: "14569",
      typeOfCourier: "Surface",
      "Dom,Int,Local": "Domestic",
      "courier Wt": "20Kg",
      code: "5247",
      description: "Documents",
    },
    {
      srNo: "03",
      date: "10/05/2024",
      time: "10:15",
      uniqueInwardNo: "520",
      pickupDate: "21/02/2024",
      senderName: "Jane Smith",
      senderDeptCode: "1505",
      consigneeName: "Neha Sharma",
      "consigneeCo. Name": "TCS Pvt.",
      airWayBillNo: "54",
      pinCode: "560100",
      destination: "Bangalore",
      state: "Karnataka",
      consigneeMobileNo: "9123456789",
      intCourierSlipNo: "1247",
      courierAccountCode: "145256258",
      "courierCo. Name": "DHL",
      officialOrPersonal: "Personal",
      courierTypeCode: "14570",
      typeOfCourier: "Air",
      "Dom,Int,Local": "International",
      "courier Wt": "15Kg",
      code: "5248",
      description: "Gifts",
    },
    {
      srNo: "04",
      date: "11/05/2024",
      time: "11:45",
      uniqueInwardNo: "521",
      pickupDate: "22/02/2024",
      senderName: "Alice Johnson",
      senderDeptCode: "1506",
      consigneeName: "Manish Jain",
      "consigneeCo. Name": "Wipro",
      airWayBillNo: "55",
      pinCode: "400001",
      destination: "Mumbai",
      state: "Maharashtra",
      consigneeMobileNo: "9988776655",
      intCourierSlipNo: "1248",
      courierAccountCode: "145256259",
      "courierCo. Name": "FedEx",
      officialOrPersonal: "Official",
      courierTypeCode: "14571",
      typeOfCourier: "Surface",
      "Dom,Int,Local": "Local",
      "courier Wt": "30Kg",
      code: "5249",
      description: "Electronics",
    },
    {
      srNo: "05",
      date: "12/05/2024",
      time: "13:30",
      uniqueInwardNo: "522",
      pickupDate: "23/02/2024",
      senderName: "Bob White",
      senderDeptCode: "1507",
      consigneeName: "Suresh Kumar",
      "consigneeCo. Name": "HCL",
      airWayBillNo: "56",
      pinCode: "500001",
      destination: "Hyderabad",
      state: "Telangana",
      consigneeMobileNo: "9765432109",
      intCourierSlipNo: "1249",
      courierAccountCode: "145256260",
      "courierCo. Name": "DTDC",
      officialOrPersonal: "Personal",
      courierTypeCode: "14572",
      typeOfCourier: "Air",
      "Dom,Int,Local": "International",
      "courier Wt": "10Kg",
      code: "5250",
      description: "Clothing",
    },
    // Add more dummy data as needed
    {
      srNo: "06",
      date: "13/05/2024",
      time: "09:45",
      uniqueInwardNo: "523",
      pickupDate: "24/02/2024",
      senderName: "Charlie Black",
      senderDeptCode: "1508",
      consigneeName: "Rajesh Mehta",
      "consigneeCo. Name": "Tech Mahindra",
      airWayBillNo: "57",
      pinCode: "380001",
      destination: "Ahmedabad",
      state: "Gujarat",
      consigneeMobileNo: "9834567890",
      intCourierSlipNo: "1250",
      courierAccountCode: "145256261",
      "courierCo. Name": "BlueDart",
      officialOrPersonal: "Official",
      courierTypeCode: "14573",
      typeOfCourier: "Surface",
      "Dom,Int,Local": "Domestic",
      "courier Wt": "25Kg",
      code: "5251",
      description: "Furniture",
    },
  ];

  const allData = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];

  const allPaginationData = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
  ];

  const handleSearch = () => {
    const filtered = tableData.filter((item) =>
      item.airWayBillNo.includes(searchInput)
    );
    setFilteredData(filtered);
    setPage(0);
  };
  const handleDownload = () => {
    const dataToDownload = filteredData.length > 0 ? filteredData : tableData;

    const worksheet = XLSX.utils.json_to_sheet(dataToDownload);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Courier Data");

    const fileName = `Courier_Report_${new Date()
      .toISOString()
      .slice(0, 10)}.xlsx`;
    XLSX.writeFile(workbook, fileName);
  };
  return (
    <div className="container-fluid bookmakerTable border rounded-3 table-responsive">
      <CustomTable
        data={filteredData.length > 0 ? filteredData : tableData}
        titleName="Reports"
        headingText={true}
        setValue={setValue}
        SelectColumnData={allData}
        SelectColumnValue={value}
        selectedRows={selectedRows}
        allSelected={allSelected}
        selectColumnData={true}
        paginationDropDown={false}
        paginationvalueName="Show"
        paginationDataValue={allPaginationData}
        dataContained={
          filteredData.length > 0 ? filteredData.length : tableData.length
        }
        pageCount={page}
        handlePageClick={handleChangePage}
        rowsPerPage={rowsPerPage}
        handleItemsPerPageChange={handleChangeRowsPerPage}
        searchVisibility={true}
        dateVisibility={true}
        buttonTitle="Search"
        placeholder="Search by AWB no"
        fromDateValue={searchInput}
        toDateChange={(e) => setSearchInput(e.target.value)}
        onPress={handleSearch}
        exceldownload={handleDownload}
        firstColumnVisibility={true}
        exportIconVisiblity={true}
        fileUploadVisiblity={true}
      />
    </div>
  );
};

export default CourierReport;
