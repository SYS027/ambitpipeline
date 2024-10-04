import React from "react";
import { Form } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
const CustomInput = (props) => {
  const {
    value,
    onChnage,
    placeholder,
    type,
    labelName,
    maxLength,
    mandatoryIcon,
  } = props;
  return (
    <div>
      <Form.Label>{labelName}</Form.Label>
      {mandatoryIcon && (
        <FaStar size={8} style={{ marginLeft: 2, color: "red" }} />
      )}

      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChnage}
        maxLength={maxLength}
      />
    </div>
  );
};

export default CustomInput;
