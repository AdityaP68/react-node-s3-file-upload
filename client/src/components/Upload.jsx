import React from "react";
import "./Components.css";

function Input({ handleChange }) {
  return (
    <div className="input-wrapper">
      <input
        className="hidden-input"
        id="imageInput"
        type="file"
        onChange={handleChange}
        hidden
      />
      <label htmlFor="imageInput" className="upload-btn">upload</label>
    </div>
  );
}

export default Input;
