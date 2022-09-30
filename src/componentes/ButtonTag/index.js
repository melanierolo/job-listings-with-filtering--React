import React from "react";
import "./style.css";

export default function ButtonTag(props) {
  /*Destructuración ES6 */
  const { tagName } = props;
  return <button className="button-tag">{tagName}</button>;
}
