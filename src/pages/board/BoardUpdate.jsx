import React, { useState, useEffect } from 'react'
import { 
  Stack,
  Box,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Button,
  TextField
} from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import BoardEditorUpdate from '../../components/board/boardComponent/BoardEditorUpdate';
import { boardUpdateUrl } from '../../components/board/MappingDB'
import { fBoardDetailState, fBoardDetailContent, alertState, alertMessegeState } from '../../components/board/RecoilAtom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

function BoardUpdate() {

  const params = useParams()
  const boardNum = params.boardNum
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [exData, setExData] = useRecoilState(fBoardDetailState)
  const contents = useRecoilValue(fBoardDetailContent)
  const setAlter = useSetRecoilState(alertState)
  const setMessage = useSetRecoilState(alertMessegeState)

  const handleChange = (e) => {
    setExData({...exData,
      [e.target.name] : e.target.value
    })
    setMessage('')
  }

  const dateSet = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = ('0' + (today.getMonth() + 1)).slice(-2);
    const dd = ('0' + today.getDate()).slice(-2);
    const dateString = yyyy + '-' + mm + '-' + dd
    setExData({boardDate : dateString})
    // console.log('date', dateString)
    // console.log('value = ', JSON.stringify(contentValue))
  }

  const handleSubmit = () => {
    const url = boardUpdateUrl + boardNum
    const data = {
      // writer : userInfo[0].mem_num,
      free_num : boardNum,
      categoryValue : exData.boardCategory,
      titleValue : exData.boardTitle,
      contentValue : contents.value,
      dateValue : exData.boardDate
    }

    if(exData.boardCategory === ''){
      alert('카테고리를 선택해주세요.')}
    else if(exData.boardTitle === ''){
      alert('제목을 입력해주세요.')}
    else if(JSON.stringify(contents) === '{}'){
      alert('내용을 입력해주세요.')}
    else if(exData.boardCategory !== '' 
            && exData.boardTitle !== '' 
            && JSON.stringify(contents) !== '{}') {
        axios.put(url, data).then(() => {
          navigate('/BoardUpdateDetail/'+boardNum ,{state:{
            boardNumber : boardNum,
            boardTitle : exData.boardTitle,
            boradContent : contents.value,
            boardDate : exData.boardDate,
            boardView : exData.boardView,
            boardCategory : exData.boardCategory,
            boardWriter : exData.boardWriter
          }})
          setMessage('수정이 완료되었습니다.')
          setAlter(true)
        })
      }
  };
  return (
    <>
    <Box
        className='boardHeader'
        sx={{
          height: '7vh',
        }}>
    </Box>
    <Stack
    alignItems={'center'}
    justifyContent={'center'}
    >
    <h2>글쓰기</h2>
    
    <Box>
    <form onSubmit={handleSubmit}>
        <FormControl sx={{ m: 3 }} error={error} variant="standard">
          <FormLabel
          sx={{color : 'black'}}>카테고리</FormLabel>
          <RadioGroup
            row
            value={exData.boardCategory || ''}
            onChange={handleChange}
            name='boardCategory'
          >
            <FormControlLabel
            value="질문" 
            control={<Radio />} 
            label="질문하기"/>
            <FormControlLabel 
            value="자랑하기" 
            control={<Radio />} 
            label="자랑하기"/>
            <FormControlLabel 
            value="무료나눔" 
            control={<Radio />} 
            label="무료나눔" />
          </RadioGroup>
          <Box
          marginBottom={'20px'}
          >
          <TextField
            onChange={handleChange}
            value={exData.boardTitle || ''}
            sx={{
              width : '400px',
              color : 'none'
            }}
            label="제목"
            type="search"
            variant="standard"
            name='boardTitle'
          />
          </Box>
          <Box>
          <BoardEditorUpdate />
          </Box>
          <Box
          display={'flex'}>
          <Button
          sx={{
            mt: 1,
            mr: 1,
            width : '120px'
            }} 
          onClick={handleSubmit}
          variant="outlined">
            수정
          </Button>
          <Button
          sx={{
            mt: 1,
            mr: 1,
            width : '120px',
            }}
          onClick={()=>navigate(-1)}
          color={'secondary'}
          variant="outlined">
            돌아가기
          </Button>
          </Box>
        </FormControl>
        </form>
    </Box>
    </Stack>
    </>
  
  )
}

export default BoardUpdate;
