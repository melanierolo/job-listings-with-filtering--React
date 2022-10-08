import React from "react";
import DeleteIcon from "../../assets/Icons/icon-remove.svg";
import "./style.css";

export default function ButtonDelete(props) {
  /*Destructuración ES6 */
  const { removeFilterTag, tag } = props;
  //console.log("button-delete", props);
  return (
    <button
      className="button-delete"
      onClick={() => {
        console.log("delete");
        removeFilterTag(tag);
      }}
    >
      <img src={DeleteIcon} alt="delete-icon" />
    </button>
  );
}
