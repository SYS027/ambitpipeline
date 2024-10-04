import React, { useState } from "react";
import CustomTable from "../../../Components/CustomeTable/CustomTable";
import AutosizeTextarea from "../../../Components/AutosizeTextarea/AutosizeTextarea";
import CommonLoader from "../../../Components/CommonLoader/CommonLoader";
import CustomInput from "../../../Components/CustomInput/CustomInput";
import CustomDropdown from "../../../Components/CustomDropdown/CustomDropdown";
import { FaEdit, FaTrash } from "react-icons/fa";

const TravelManagement = () => {
  const [value, setValue] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event, 10));
    setPage(0);
  };

  const data = [
    {
      "S.No": 1,
      "Vendor Name": "John Doe",
      "Travel Request No.": 28,
      Invoice: "male",
      "Cancellation Charges": "000000",
      Status: "Received",
      "Actual Invoice Amount": "12000.00",
      "NEFT Payment Details": "-",
      "TRAVEL FROM / SOURCE DESTINATION": "Mumbai",
      "TRAVEL TO / TARGET DESTINATION": "Delhi",
    },
    {
      "S.No": 2,
      "Vendor Name": "John Doe",
      "Travel Request No.": 21,
      Invoice: "male",
      "Cancellation Charges": "000000",
      Status: "Received",
      "Actual Invoice Amount": "12000.00",
      "NEFT Payment Details": "-",
      "TRAVEL FROM / SOURCE DESTINATION": "Mumbai",
      "TRAVEL TO / TARGET DESTINATION": "Delhi",
    },
    {
      "S.No": 3,
      "Vendor Name": "John Doe",
      "Travel Request No.": 22,
      Invoice: "male",
      "Cancellation Charges": "000000",
      Status: "Received",
      "Actual Invoice Amount": "12000.00",
      "NEFT Payment Details": "-",
      "TRAVEL FROM / SOURCE DESTINATION": "Mumbai",
      "TRAVEL TO / TARGET DESTINATION": "Delhi",
    },
    {
      "S.No": 4,
      "Vendor Name": "John Doe",
      "Travel Request No.": 24,
      Invoice: "male",
      "Cancellation Charges": "000000",
      Status: "Received",
      "Actual Invoice Amount": "12000.00",
      "NEFT Payment Details": "-",
      "TRAVEL FROM / SOURCE DESTINATION": "Mumbai",
      "TRAVEL TO / TARGET DESTINATION": "Delhi",
    },
  ];

  const allData = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
  ];
  const actions = [
    {
      label: "Edit",
      icon: <FaEdit />,
      onClick: (item) => handleEdit(item),
    },
    {
      label: "Delete",
      icon: <FaTrash />,
      onClick: (item) => handleDelete(item),
    },
  ];

  const handleEdit = (item) => {
    alert(`Editing item: ${item["S.No"]}`);
  };

  const handleDelete = (item) => {
    alert(`Deleting item: ${item["S.No"]}`);
  };

  const handleAction = () => {
    alert("Work under Progress...");
  };

  return (
    <div class="container-fluid bookmakerTable border rounded-3 table-responsive">
      <CustomTable
        data={data}
        titleName="Travel Management"
        headingText={true}
        setValue={setValue}
        SelectColumnData={allData}
        SelectColumnValue={value}
        selectedRows={selectedRows}
        allSelected={allSelected}
        selectColumnData={true}
        firstColumnVisibility={true}
        dataContained={data?.length}
        pageCount={page}
        handlePageClick={handleChangePage}
        rowsPerPage={rowsPerPage}
        handleItemsPerPageChange={handleChangeRowsPerPage}
        // exportIconVisiblity={true}
        // exportToExcelBtnVisiblity={true}
        // actionVisibility={true}
        onRowCheckboxChange={handleAction}
        // clickableColumns={["Vendor Name", "Travel Request No.", "Invoice"]}
        // onColumnClick={(key) => console.log(`Column clicked: ${key}`)}
        // actions={actions}
      />
      {/* <CustomInput labelName="sonu" mandatoryIcon={true} /> */}
      {/* <CommonLoader /> */}
    </div>
  );
};

export default TravelManagement;
