import React from "react";
import "./style.css";

export default function ButtonTag(props) {
  /*Destructuración ES6 */
  const { tagName, setTags } = props;
  //console.log("button-tag", props);
  return (
    <button
      className="button-tag"
      onClick={() => {
        setTags(tagName);
      }}
    >
      {tagName}
    </button>
  );
}
