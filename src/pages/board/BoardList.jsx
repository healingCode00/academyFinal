import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
          Container, 
          Box,
          Button,
          Stack
        } from '@mui/material'
import BoardTable from '../../components/board/table/BoardTable'
import Search from '../../components/board/table/Search'
import BtnGroup from '../../components/board/boardComponent/BtnGroup'
import { fBoardState, btnState, pageState } from '../../components/board/RecoilAtom'
import { useRecoilValue, useSetRecoilState, useRecoilState } from 'recoil'
import axios from 'axios';
import AlertMessage from '../../components/board/boardComponent/AlertMessage'
import { boardListUrl } from '../../components/board/MappingDB'

function BoardList() {
  
  const btnValue = useRecoilValue(btnState)
  const [boardData, setBoardData] = useRecoilState(fBoardState)
  const setPage = useSetRecoilState(pageState);

  useEffect(() => {
    axios.get(boardListUrl).then((res) => {
      if(btnValue === 'question'){
        setBoardData(res.data.filter(data => data.free_subject === '질문' ))
        setPage(0)
        // console.log('질문')
      } else if (btnValue === 'boast'){
        setBoardData(res.data.filter(data => data.free_subject === '자랑하기' ))
        setPage(0)
        // console.log('자랑')
      } else if (btnValue === 'share'){
        setBoardData(res.data.filter(data => data.free_subject === '무료나눔' ))
        setPage(0)
        // console.log('무료나눔')
      } else if (btnValue === 'all'){
        setBoardData(res.data)
      }
      // console.log(boardData);
    })

  },[btnValue])
  // const navigate = useNavigate();
  // onClick={navigate('/Home')}
  return (
    <Container
      className='container'
      maxWidth="lg">
    <Box>
    {/* ------------------- Header Start------------------------*/}
    <Box
      className='boardHeader'
      sx={{
        height: '7vh',
      }}>
      <AlertMessage/>
    </Box>
    {/* ------------------- Header End ------------------------*/}

    {/* ------------------- Body Start ------------------------*/}

    <Box
      className='boardBody'
    >
          <Stack
          marginLeft={'20px'}
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          >
        <Box display={'flex'}>
        <h2>자유게시판</h2>
          <BtnGroup />
        </Box>
        <Search />
        </Stack>
      </Box>
    <BoardTable data={boardData}/>
    </Box>

    {/* ------------------- Body End ------------------------*/}
    </Container>
  )
}

export default BoardList;