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
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BoardEditor from '../../components/board/boardComponent/BoardEditor';
import { boardInsertUrl } from '../../components/board/MappingDB'
import { userInfoState, fBoardInsertContent, pageState } from '../../components/board/RecoilAtom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

const BoardInsert = () => {

  const navigate = useNavigate();

  const [categoryValue, setCategoryValue] = useState('');
  const [titleValue, setTitleValue] = useState('')
  const contentValue = useRecoilValue(fBoardInsertContent)
  const contentReset = useResetRecoilState(fBoardInsertContent)
  const [dateValue, setDateValue] = useState('')
  const userInfo = useRecoilValue(userInfoState)
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState('');
  const setPage = useSetRecoilState(pageState);

  const handleRadioChange = (event) => {
    setCategoryValue(event.target.value)
    setError(false);
    // console.log('category', categoryValue)
  };

  const handleTitleChange = (event) => {
    setTitleValue(event.target.value)
    // console.log('title', titleValue)
    dateSet()
  }

  const dateSet = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = ('0' + (today.getMonth() + 1)).slice(-2);
    const dd = ('0' + today.getDate()).slice(-2);
    const dateString = yyyy + '-' + mm + '-' + dd
    setDateValue(dateString)
    // console.log('date', dateString)
    // console.log('value = ', JSON.stringify(contentValue))
  }

  // const editorValue = (state) => {
  //   setContentValue(state.value + '')
  //   // console.log('content', contentValue)
  // }

  const handleSubmit = () => {
    const url = boardInsertUrl //완료
    const data = {
      writer : userInfo[0].mem_num,
      categoryValue : categoryValue,
      titleValue : titleValue,
      contentValue : contentValue.value,
      dateValue : dateValue
    }

    if(categoryValue === ''){
      alert('카테고리를 선택해주세요.')}
    else if(titleValue === ''){
      alert('제목을 입력해주세요.')}
    else if(JSON.stringify(contentValue) === '{}'){
      alert('내용을 입력해주세요.')}
    else if(categoryValue !== '' 
            && titleValue !== '' 
            && JSON.stringify(contentValue) !== '{}') {
        axios.post(url, data).then(() => {
          navigate('/BoardList')
          contentReset()
          setPage(0)
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
          value={categoryValue}
          onChange={handleRadioChange}
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
          onChange={handleTitleChange}
          value={titleValue}
          autoComplete='off'
          sx={{
            width : '400px',
            color : 'none'
          }}
          label="제목"
          type="search"
          variant="standard"
        />
        </Box>
        <Box>
        <BoardEditor />
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
          등록
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
export default BoardInsert;