import React from "react";
import TextareaAutosize from "react-textarea-autosize";

const AutosizeTextarea = (props) => {
  const { value, onChnage, placeholder, minRows, maxRows } = props;

  return (
    <div>
      <TextareaAutosize
        minRows={minRows}
        maxRows={maxRows}
        value={value}
        onChnage={onChnage}
        placeholder={placeholder}
      />
    </div>
  );
};

export default AutosizeTextarea;
