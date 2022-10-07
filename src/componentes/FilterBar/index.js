import React from "react";
import "./style.css";
import ButtonDelete from "../ButtonDelete";

export default function FilterBar(props) {
  /*Destructuración ES6 */
  const { tags, removeFilterTag, clearAll } = props;
  console.log("setTags -button", props);
  const clicked = (a) => {
    console.log("clicked a Tag in FilterBar", a);
  };
  return (
    <>
      <div className="filter-container">
        <div className="filter-tags">
          {tags.map((tag, id) => {
            return (
              <>
                <div className="filter-tag">
                  <li
                    className="filter-name"
                    key={id}
                    tagName={tag}
                    setTags={clicked}
                  >
                    {tag}
                  </li>
                  <ButtonDelete removeFilterTag={removeFilterTag} tag={tag} />
                </div>
              </>
            );
          })}
        </div>
        <div className="filter-clear">
          <button
            className="filter-clear-all"
            onClick={() => {
              clearAll();
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
