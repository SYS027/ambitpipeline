import React, { useEffect, useState } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import "../../Assets/css/Navbar/Navbar.css";
import { useDispatch } from "react-redux";
import { handleShow } from "./NavbarSlice";
const Navbars = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(
        (prevDateTime) => new Date(prevDateTime.getTime() + 1000)
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  };
  // const show = useSelector((state) => state.Navbar.show);

  return (
    <>
      <Navbar
        sticky="top"
        className="bg-body-tertiary p-0 shadow"
        expand="md"
      >
        <Navbar.Brand>
          <img src="/images/logo.svg" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => dispatch(handleShow())}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Button
            className="border-0 btn-light d-none d-md-block"
            onClick={() => dispatch(handleShow())}
          >
            <img src="/images/hamburger.svg" alt="Logo" />
          </Button>
          <Nav className="me-auto">
            <Nav.Link href="/" className="ms-md-5 ms-0">
              <img src="/images/home.svg" alt="Logo" className="me-2" />
              Home
            </Nav.Link>
            <Nav.Link href="#setting" className="ms-md-5 ms-0">
              <img src="/images/settings.svg" alt="Logo" className="me-2" />
              Setting
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex  profile">
            <div className="d-md-block d-none">
              Admin User
              <p>{currentDateTime.toLocaleString(undefined, options)}</p>
            </div>
            <Nav.Link className="ms-md-4 ms-0 logout">
              <img src="/images/logout.svg" alt="Logo" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;
