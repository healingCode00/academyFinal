import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

function BestPosting(props) {
  
///// 임시 데이터
  var items = [
    {
      boardNumber: "2",
      boardTitle: "새로 산 램프 보고 가세요",
      댓글수: "2",
      이미지여부: "🎦",
    },
    {
      boardNumber: "",
      boardTitle: "전기사용이 안돼서 고...",
      댓글수: "189",
      이미지여부: "",
    },
    {
      boardNumber: "",
      boardTitle: "좋았어요!",
      댓글수: "128",
      이미지여부: "",
    },
  ]; 
  return (
    <Box>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Box>
  );
}

function Item(props) {
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState([{
    free_num : 0,
    free_subject : "",
    free_content : "",
    mem_num : 0,
    free_regdate : "",
    free_title : "",
    free_views : 0,
  }])
  
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton
          component="a"
          onClick={()=> navigate('/BoardDetail/'+props.free_num ,{state:{
            boardNumber : props.free_num,
            boardTitle : props.free_title,
            boradContent : props.free_content,
            boardDate : props.free_regdate,
            boardView : props.free_views,
            boardCategory : props.free_subject,
            boardWriter : props.mem_num
          }})}
        >
          <ListItemText
          primary={`${props.free_title}[${props.free_views}]`}
          />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default BestPosting;
