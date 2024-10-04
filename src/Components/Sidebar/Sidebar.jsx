import React, { useMemo, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "../../Assets/css/Sidebar/Sidebar.css";
const Sidebar = () => {
  const [open, setOpen] = useState(null);
  const items = useMemo(
    () => [
      {
        id: 1,
        menu: "Vendor Management",
        subMenu: "Vendor Management",
        url: "/vendorManagement",
      },
      {
        id: 2,
        menu: "Vendor Management",
        subMenu: "Bill Management",
        url: "/vendorManagement",
      },
      {
        id: 3,
        menu: "Vendor Management",
        subMenu: "PO Management",
        url: "/poManagement",
      },
      { id: 4, menu: "Courier Service" },
      {
        id: 5,
        menu: "Courier Service",
        subMenu: "Inward Courier",
        url: "/inwardCourier",
      },
      {
        id: 6,
        menu: "Courier Service",
        subMenu: "Outward Courier",
        url: "/outwardCourier",
      },
      {
        id: 7,
        menu: "Courier Service",
        subMenu: "Reverse Pickup",
        url: "/reversePickup",
      },
      {
        id: 8,
        menu: "Courier Service",
        subMenu: "Report",
        url: "/courierReport",
      },
      {
        id: 8,
        menu: "Courier Service",
        subMenu: "Upload Document",
        url: "/uploaddocument",
      },
      {
        id: 9,
        menu: "PPM Schedule Management",
        subMenu: "PPM Management",
        url: "/ppmManagement",
      },
      {
        id: 10,
        menu: "PPM Schedule Management",
        subMenu: "Reminder",
        url: "/ppmReminder",
      },
      {
        id: 11,
        menu: "PPM Schedule Management",
        subMenu: "Report",
        url: "/ppmReport",
      },
      { id: 12, menu: "Travel Management" },
      { id: 13, menu: "Attendance of Support Staff" },
      { id: 14, menu: "Office Supplies" },
      { id: 15, menu: "AMC/Contracts" },
      { id: 16, menu: "Visitor Management System" },
      { id: 17, menu: "Repair & Maintenance Works" },
      { id: 18, menu: "Customer Satisfaction Feedback" },
    ],
    []
  );
  const sidebarMenu = useMemo(() => {
    const menuMap = new Map();

    items.forEach((item) => {
      if (!menuMap.has(item.menu)) {
        menuMap.set(item.menu, {
          id: item.id,
          menu: item.menu,
          subMenus: [],
          url: item.url,
        });
      }
      if (item.subMenu) {
        menuMap.get(item.menu).subMenus.push({
          id: item.id,
          subMenu: item.subMenu,
          url: item.url,
        });
      }
    });

    return Array.from(menuMap.values());
  }, [items]);
  const handleOpen = (index) => {
    if (open === index) {
      setOpen(-1);
    } else {
      setOpen(index);
    }
  };
  return (
    <Card>
      <ListGroup>
        {sidebarMenu.map((item, index) => (
          <ListGroup.Item key={item.menu} className="border-0">
            {item.subMenus?.length > 0 ? (
              <Button
                variant="dark"
                className="w-100 d-flex text-start justify-content-between align-items-center"
                onClick={() => handleOpen(index)}
              >
                {item.menu}
                {open === index ? (
                  <FaCircleChevronUp className="ms-3" />
                ) : (
                  <FaCircleChevronDown className="ms-3" />
                )}
              </Button>
            ) : (
              <NavLink
                to={item.url}
                className="btn btn-dark text-start bg-black w-100"
              >
                {item.menu}
              </NavLink>
            )}

            {open === index && item.subMenus && (
              <ListGroup>
                {item.subMenus.map((subMenu) => (
                  <ListGroup.Item key={subMenu.subMenu} className="border-0">
                    <NavLink to={subMenu.url} className="btn btn-dark w-100">
                      {subMenu.subMenu}
                    </NavLink>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};

export default Sidebar;
