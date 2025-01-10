import React from "react";
import "./Tag.css";

export default function Tag({ tagName, selectTag, selected }) {
  //selected가 true면 선택된 태그의 색상을 변경
  //selected가 false면 기본 색상
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    JavaScript: { backgroundColor: "#ffd12c" },
    REACT: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      onClick={() => selectTag(tagName)}
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
    >
      {tagName}
    </button>
  );
}
