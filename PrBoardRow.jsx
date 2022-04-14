import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { Button } from '@mui/material';
const PrBoardRow = (props) => {
  console.log(props);
  return ( 
    <>
    <div class="card">
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title><h1>{props.PrBoard.PrBoard_Content}</h1></Card.Title>
  <Button variant="primary">{props.PrBoard.PrBoard_Tag}</Button>
  <Button variant="primary">#야경맛집</Button>
  <Button variant="primary">#계곡</Button>
    <Card.Text>
    {props.PrBoard.PrBoard_Star} ★ ★ ★ ☆ ☆ <br/>
    {props.PrBoard.PrBoard_Detail}
      </Card.Text>
      <Card.Img variant="top" src='https://i.ibb.co/KX1sYH9/Img.png'
  border="0" width="400" height="200" />
    </Card.Body>
  </Card>

  <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title><h1>{props.PrBoard.PrBoard_Content}</h1></Card.Title>
  <Button variant="primary">{props.PrBoard.PrBoard_Tag}</Button>
  <Button variant="primary">#휴양림</Button>
  <Button variant="primary">#캠핑카</Button>
    <Card.Text>
    {props.PrBoard.PrBoard_Star} ★ ★ ★ ★ ★ <br/>
    {props.PrBoard.PrBoard_Detail}
      </Card.Text>
      <Card.Img variant="top" src='https://i.ibb.co/KX1sYH9/Img.png'
  border="1" width="400" height="200" />
    </Card.Body>
  </Card>
  </div>
</>

    )
};

export default PrBoardRow;

