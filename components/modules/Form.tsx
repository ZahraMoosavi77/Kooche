"use client";
import React from "react";

const Form = ({ title, caption, children }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="form">
      <div className="w-full">
        <h4 className="form-title">{title}</h4>
        <p className="form-caption">{caption}</p>
      </div>
      {children}
    </form>
  );
};

export default Form;
