import React from "react";

const TextField = ({ label, placeholder, type, color, onChange }) => {
  return (
    <div>
      <h6
        style={{
          color: color,
        }}
      >
        {label}
      </h6>
      <input
        style={{
          borderWidth: "1px",
          borderColor: "#0D74D7",
          borderRadius: "10px",
          padding: "1em",
          width: "100%",
        }}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
