import React, { useRef} from "react";
import { Quill } from "react-quill";


const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

export const formats = [
  "header",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "image",
  "color",
];

export const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      
      <select className="ql-size" defaultValue="medium">
        <option value="small">매우작게</option>
        <option value="extra-small">작게</option>
        <option value="medium">중간</option>
        <option value="large">크게</option>
      </select>
      <select className="ql-header" defaultValue="3">
        <option value="1">제목</option>
        <option value="2">소제목</option>
        <option value="3">본문</option>
      </select>
    </span>
    <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>

    <span className="ql-formats">
      <select className="ql-align" />
      <select className="ql-color" />
      <select className="ql-background" />
    </span>
    <span className="ql-formats">
      <button className="ql-image" />
    </span>
  </div>
);

export default QuillToolbar;
