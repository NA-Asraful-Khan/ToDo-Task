import React from "react";

export default function Item({ Task, Description, remove, update }) {
  return (
    <div className="item">
      <div className={`text`}>
        <h2 className={`disabled`}>{Task}</h2>
        <p className={`disabled`}>{Description}</p>
      </div>
      <div className="icons">
        <i className="ri-check-double-line ri-2x"></i>
        <i className="ri-edit-line ri-2x" onClick={update}></i>
        <i className="ri-delete-bin-fill ri-2x" onClick={remove}></i>
      </div>
    </div>
  );
}
