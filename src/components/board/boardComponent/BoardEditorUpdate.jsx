import React, { useRef, useMemo, useEffect } from "react";
import { imgInsertUrl } from '../MappingDB'
import ReactQuill, {Quill} from "react-quill";
import EditorToolbar, { formats } from "./EditorToolbar";
import axios from "axios";
import { fBoardDetailContent } from "../RecoilAtom";
import { useRecoilState } from "recoil";
import "react-quill/dist/quill.snow.css";
import ImageResize from 'quill-image-resize-module-react'
import "./styles.css";
// Quill.register('modules/imageResize', ImageResize);

const BoardEditor = () => {
  const QuillRef = useRef()
  const [state, setState] = useRecoilState(fBoardDetailContent);
  const handleChange = (value) => {
    setState({ value : value });
    console.log(state.value)
  };

  const placeholder = "Hi.Camping 약관 규정상 적절하지 않은 내용을 게시할 경우 통보없이 삭제될 수 있음을 안내드립니다."

  useEffect(() => {
    console.log('editor : ', state)
  }) 
  const imgHandler = () => {
    const input = document.createElement("input")
    const formData = new FormData();
    let url = "";
  
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*')
    // document.body.appendChild(input);
    input.click();
  
    input.onchange = async () => {
      const file = input.files;
      if (file !== null) {
        formData.append("image", file[0]);
        console.log(formData)

        try {
          const res = await axios.post(imgInsertUrl, formData)
          console.log('success : ' ,res.data)
          url = res.data;

        const editor = QuillRef.current.getEditor();
        const range = editor.getSelection();
        editor.insertEmbed(range.index, 'image', url);

        } catch (error) {
          console.log('fail')
        }}}};

  const modules = useMemo(() => {
    return{
    toolbar: {
      container: "#toolbar",
      handlers: {
        image : imgHandler
      }
    },
    imageResize: {
      parchment: Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize']
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true
    }}}, []);
  
  return (
    <div className="text-editor">
      <EditorToolbar />
      <ReactQuill
          ref={(element) => {
            if (element !== null) {
              QuillRef.current = element;
            }
          }}
        theme="snow"
        spellcheck={false}
        value={state.value}
        onChange={handleChange}
        placeholder={placeholder}
        modules={modules}
        formats={formats}
      />
    </div>
  )};

export default BoardEditor;
