import { Route, Routes } from "react-router-dom";
import Navbars from "./Pages/Navbar/Navbars";
import Sidebar from "./Pages/Sidebar/Sidebar";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import Dashboard from "./Pages/DashboardModulePages/Dashboard/Dashboard";
import InwardCourier from "./Pages/CourierModulePages/InwardCourier/InwardCourier";
import AddInwardCourier from "./Pages/CourierModulePages/InwardCourier/AddInwardCourier";
import OutwardCourier from "./Pages/CourierModulePages/OutwardCourier/OutwardCourier";
import AddOutwardCourier from "./Pages/CourierModulePages/OutwardCourier/AddOutwardCourier";
import ReversePickup from "./Pages/CourierModulePages/ReversePickup/ReversePickup";
import CourierReport from "./Pages/CourierModulePages/CourierReport/CourierReport";
import UploadDocument from "./Pages/CourierModulePages/UploadDocument";
import VendorManagement from "./Pages/VendorManagement/VendorManagement/VendorManagement";
import AddVendor from "./Pages/VendorManagement/VendorManagement/AddVendor";
import BusinessAgreement from "./Pages/Contract & Aggreements/BusinessAgreement";
import PPMMangement from "./Pages/PPMMangement/PPMMangement";
import PPMSchedule from "./Pages/PPMMangement/PPMSchedule";
import PPMReports from "./Pages/PPMMangement/PPMReports";
import AgreementUpload from "./Pages/Contract & Aggreements/AgreementUpload";
import AgreementReport from "./Pages/Contract & Aggreements/AgreementReport";
import Attendance from "./Pages/AttendanceOfSupport/Attendance";
import TravelManagement from "./Pages/TrevalManagement/TravelManagement/TravelManagement";
import AirTravelManagement from "./Pages/TrevalManagement/AirTravelManagement/AirTravelManagement";
import ForexTravelManagement from "./Pages/TrevalManagement/ForexTravelManagement/ForexTravelManagement";
import RoadTravelManagement from "./Pages/TrevalManagement/RoadTravelManagement/RoadTravelManagement";
import VisaTravelManagement from "./Pages/TrevalManagement/VisaTravelManagement/VisaTravelManagement";
import OutwardRequestForm from "./Pages/CourierModulePages/OutwardRequestForm/OutwardRequestForm";

function App() {
  const show = useSelector((state) => state.Navbar.show);

  return (
    <>
      <Navbars />
      <Container fluid className="py-3">
        <div className={`${show ? "d-flex" : ""}`}>
          <div className={`sidebar ${show ? "open" : ""}`}>
            <Sidebar />
          </div>
          <div
            style={{ overflowY: "auto", height: "85vh" }}
            className={`dashboard-container ${show ? "reduced-width" : ""}`}
          >
            <Routes>
              <Route path="/inwardcourier" element={<InwardCourier />} />
              <Route path="/addinwardcourier" element={<AddInwardCourier />} />
              <Route path="/outwardcourier" element={<OutwardCourier />} />
              <Route
                path="/addoutwardcourier"
                element={<AddOutwardCourier />}
              />
              <Route path="/reversepickup" element={<ReversePickup />} />
              <Route path="/courierreport" element={<CourierReport />} />
              <Route path="/uploaddocument" element={<UploadDocument />} />
              <Route path="/vendormanagement" element={<VendorManagement />} />
              <Route path="/addvendor" element={<AddVendor />} />
              <Route
                path="/businessagreement"
                element={<BusinessAgreement />}
              />
              <Route path="/" element={<Dashboard />} />
              <Route path="/ppmManagement" element={<PPMMangement />} />
              <Route path="/ppmSchedule" element={<PPMSchedule />} />
              <Route path="/ppmReport" element={<PPMReports />} />
              <Route path="/agreementupload" element={<AgreementUpload />} />
              <Route path="/agreementreport" element={<AgreementReport />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/travelManagement" element={<TravelManagement />} />
              <Route path="/airTravelManagement" element={<AirTravelManagement />} />
              <Route path="/forexTravelManagement" element={<ForexTravelManagement />} />
              <Route path="/roadTravelManagement" element={<RoadTravelManagement />} />
              <Route path="/visaTravelManagement" element={<VisaTravelManagement />} />
              <Route path="/outwardRequestForm" element={<OutwardRequestForm />} />
              
            </Routes>
          </div>
        </div>
      </Container>
    </>
  );
}

export default App;
