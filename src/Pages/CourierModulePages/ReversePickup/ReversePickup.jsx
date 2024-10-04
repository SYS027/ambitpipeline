import React, { useState } from "react";
import CustomTable from "../../../Components/CustomeTable/CustomTable";
import { useNavigate } from "react-router-dom";
const ReversePickup = () => {
  const [value, setValue] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [allSelected, setAllSelected] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event, 10));
    setPage(0);
  };
  const navigate = useNavigate();
  const data = [
    {
      "S.No": 1,
      Time: "12:45",
      "Unique No.": "381",
      Month: "May",
      Day: "01",
      Date: "01/05/2024",
      "Shipper Name": "Sakshi Sankhe",
      Department: "Web Developer",
      "Consignee Name": "Ankit Soni",
      "Consignees Company Name": "Reliance Pvt.",
      Pincode: "48325",
      Location: "Mumbai",
      "Mobile No.": "6261446325",
      "Courier TYPE": "Air Courier",
      "Courier Type Code": "12546",
      "Type Of Courier Doc Or Non-Doc": "Non Doc",
      "No. of Letters": "2",
      "Reverse Pickup Token No.": "T145526",
      "Consignment No.": "45125",
      "Courier Co. Name": "Anup Soni",
      "Courier OR Speed-Post Or Hand-Delivery or Reverse_Pickup":
        "Hand-Delivery",
      Description: "-",
      Code: "45612",
      "Received Name": "Ankit Soni",
      Remarks: "-",
      "Returns Courier Airway Bill Nos.": "14562",
      "Error Code": "47895",
      "Return Courier Reason": "Bad Quality",
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

  return (
    <div class="container-fluid bookmakerTable border rounded-3 table-responsive">
      <CustomTable
        data={data}
        titleName="ReversePickup Courier"
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
        dataContained={data?.length}
        pageCount={page}
        handlePageClick={handleChangePage}
        rowsPerPage={rowsPerPage}
        handleItemsPerPageChange={handleChangeRowsPerPage}
        onPress={() => navigate("/addinwardcourier")}
        buttonTitle="Add New"
        firstColumnVisibility={true}
        exportIconVisiblity={true}
      />
    </div>
  );
};

export default ReversePickup;
