import React, { useState } from "react";

function InputTextBox({
  hintText = "search term",
  onTextFieldUpdated,
  style = {},
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    if (typeof onTextFieldUpdated === "function") {
      onTextFieldUpdated(event.target.value);
    }
  };

  // default input styling; parent-provided `style` will override these values
  const baseStyle = {
    height: 36,
    padding: "6px 10px",
    boxSizing: "border-box",
    display: "block",
    margin: "8px auto",
    width: "100%",
  };

  return (
    <input
      type="text"
      placeholder={hintText}
      value={searchTerm}
      onChange={handleSearchChange}
      style={{ ...baseStyle, ...style }}
    />
  );
}

export default InputTextBox;
