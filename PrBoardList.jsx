import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card'
import PrBoardRow from './PrBoardRow';
import { Button } from '@mui/material';
import { Key } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import "./PrBoardList.css";

const PrBoardList = () => {
  const [PrBoards, setPrBoards] = useState ([
    {PrBoard_Num:0, PrBoard_Tag:'강원,야경맛집,계곡', PrBoard_Star:'별점 3',PrBoard_ZZIM:'찜수2',PrBoard_Content:'맑은 물 줄기를 따라 별빛이 반짝이는 야경 맛집으로 초대합니다.',img:'https://i.ibb.co/BPY95fs/3.jpg'},
    {PrBoard_Num:1, PrBoard_Tag:'서울,휴양림,캠핑카', PrBoard_Star:'별점 5',PrBoard_ZZIM:'찜수222',PrBoard_Content:'서울에서 즐길 수 있는 자연의 숨결 ! 남산 아래 쉼터에서 도심 속의 여유를 찾아보세요.', img:'https://i.ibb.co/KX1sYH9/Img.png'},

  ])

  return (

<div><h1>Hi. Camping</h1>
  홍보
  <Button>전체</Button>
    <Button variant="contained">서울</Button>
    <Button variant="contained">경기</Button>
    <Button variant="contained">강원</Button>
    <Button variant="contained">충청</Button>
    <Button variant="contained">전라</Button>
    <Button variant="contained">경상</Button>
    <Button variant="contained">제주</Button>
    <br/>
    <Link to="/PrBoardInsert">
      <Button variant="contained">글쓰기</Button>
    </Link>

{/*--------------------- 정렬박스 ---------------------*/}

<Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    정렬
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">이름순</Dropdown.Item>
    <Dropdown.Item href="#/action-2">리뷰순</Dropdown.Item>
    <Dropdown.Item href="#/action-3">인기순</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

{/*--------------------- card1 ---------------------*/}
<Card style={{ width: '18rem' }}>
    {PrBoards.map(PrBoard => (
      <PrBoardRow key={PrBoards.PrBoard_Num} PrBoard={PrBoard}/>
    ))}
</Card>

</div>
  )
};

/* window.addEventListener('scroll', () => { 
  console.log(window.scrollX, window.scrollY);
}); */
window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

export default PrBoardList;