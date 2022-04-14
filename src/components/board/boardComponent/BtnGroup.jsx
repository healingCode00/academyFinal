import * as React from 'react';
import {
  ToggleButtonGroup,
  ToggleButton } from '@mui/material';
import { btnState } from '../RecoilAtom'
import { useRecoilState } from 'recoil';
// import { useDispatch, useSelector } from 'react-redux';


export default function BtnGroup() {
  // const reduxValue = useSelector((state) => state.alignment)
  // const dispatch = useDispatch();
  const [btnValue, setBtnValue] = useRecoilState(btnState)

  const handleAlignment = (event, newAlignment) => {
    setBtnValue(newAlignment)
    // console.log(reduxValue)
  };

  return (
    <ToggleButtonGroup
      size='small'
      color='primary'
      value={btnValue}
      exclusive
      onChange={handleAlignment}
      sx={{ margin : 2}}
    >

      <ToggleButton
      value="all"
      sx={{
        width : '60px',
        marginLeft : '80px',
      }}
      >
        전체
      </ToggleButton>

      <ToggleButton
      value="question"
      sx={{
        width : '60px',
        marginLeft : '30px'
      }}
      >
        질문
      </ToggleButton>

      <ToggleButton value="boast"
      sx={{
        width : '80px',
        marginLeft : '30px'
      }}
      >
        자랑하기
      </ToggleButton>

      <ToggleButton 
      value="share"
      sx={{
        width : '80px',
        marginLeft : '30px'
      }}
      >
        무료나눔
      </ToggleButton>

    </ToggleButtonGroup>
  );
}