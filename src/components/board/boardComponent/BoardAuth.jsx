import React, { useEffect } from 'react'
import {
      Box,
      Button
        } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useRecoilValue } from 'recoil'
import { userInfoState } from '../RecoilAtom'
import BoardDelete from '../BoardDelete'
import BoardUpdate from '../../../pages/board/BoardUpdate'
import { useNavigate } from 'react-router-dom'

function BoardAuth(props) {
  
  const userInfo = useRecoilValue(userInfoState)
  const writerAuth = props.auth
  const boardNum = props.boardNum
  useEffect(() => {
    
  })
  const navigate = useNavigate()
  if(writerAuth === userInfo[0].mem_nick){
  return (
    <div>
      <Box display={'flex'}>
    <Button
      sx={{
      marginRight : '6px',
      backgroundColor : '#023E8A',
      color : 'white',
      ":hover" : {
        backgroundColor : 'white',
        color : 'black',
        borderColor : 'crimson'
      }
        }}
        onClick={()=> navigate('/BoardUpdate/'+ boardNum)}
    variant="contained"
    ><AssignmentIcon sx={{marginRight : '2px'}} />수정</Button>
      <BoardDelete boardNum={boardNum} />
      </Box>
    </div>
  )
} else {
  return(
    <>
    </>
  )
}
}

export default BoardAuth;
