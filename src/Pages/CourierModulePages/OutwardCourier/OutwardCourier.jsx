import React, { useState } from "react";
import CustomTable from "../../../Components/CustomeTable/CustomTable";
import { useNavigate } from "react-router-dom";

const OutwardCourier = () => {
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
    <div className="container-fluid bookmakerTable border rounded-3 table-responsive">
      <CustomTable
        data={data}
        titleName="Outward Courier"
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
        onPress={() => navigate("/addoutwardcourier")}
        buttonTitle="Add New"
        firstColumnVisibility={true}
        exportIconVisiblity={true}
      />
    </div>
  );
};

export default OutwardCourier;
