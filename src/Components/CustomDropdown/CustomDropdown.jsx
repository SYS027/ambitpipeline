import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const CustomDropdown = (props) => {
  const { dropdownLabelName, options, onChange, selectedValue,mandatoryIcon } = props;
  return (
    <div className="align-items-center">
      <Form.Label htmlFor="customDropdown">{dropdownLabelName}</Form.Label>
      {mandatoryIcon && (
        <FaStar size={8} style={{ marginLeft: 2, color: "red" }} />
      )}

      <InputGroup>
        <Form.Control
          as="select"
          id="customDropdown"
          aria-label={dropdownLabelName}
          onChange={onChange}
          value={selectedValue}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
      </InputGroup>
    </div>
  );
};

export default CustomDropdown;
