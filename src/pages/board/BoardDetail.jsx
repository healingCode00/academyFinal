import React, { Suspense, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import BoardCommentList from '../../components/board/BoardCommentList'
import {
  Box,
  Divider,
  Stack,
  Chip,
  Button,
  CircularProgress,
} from '@mui/material'
import axios from 'axios'
import { commentCount, fBoardDetailState, fBoardDetailContent } from '../../components/board/RecoilAtom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import BoardAuth from '../../components/board/boardComponent/BoardAuth'
import AlertMessage from '../../components/board/boardComponent/AlertMessage'
import { viewCountUrl } from '../../components/board/MappingDB'

function BoardDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const commentCountValue = useRecoilValue(commentCount)
  const detailData = useSetRecoilState(fBoardDetailState)
  const updateContent = useSetRecoilState(fBoardDetailContent)

  const {
    boardNumber,
    boardTitle,
    boradContent,
    boardDate,
    boardView,
    boardCategory,
    boardWriter
  } = location.state

  // const viewState = Number(boardView + 1)

  const viewCount = () => {
    const url = viewCountUrl + boardNumber //완료
    const data = {
      countViews : boardView,
      free_num : boardNumber
    }
    axios.put(url, data).then((res) => {
    })
  }

  useEffect(() => {
    viewCount()
    detailData(location.state)
    updateContent({value : boradContent})
  })

  return (
    <Box paddingLeft={'6vw'}>
    <Box
      className='boardHeader'
      sx={{height: '7vh',}}>
    </Box>
    <Box>
      <AlertMessage />
    </Box>
    <h2>자유게시판</h2>
    <Divider variant="inset"
      sx={{
        marginLeft : '-0px',
        marginTop : '-8px',
        width : '0vw',
        borderColor : '#00B4D8'
      }}
      />
      <Box
      marginTop={'-6px'}
      >
      <Stack
      width={'80vw'}
      alignItems={'center'}
      direction={'row'}>
      <Chip
      sx={{
        color : 'white',
      }}
      color='primary'
      label={boardCategory}/>
      <Box
      marginLeft={'5px'}
      >
      <h3>{boardTitle}</h3>
      </Box>
      </Stack>
      <Stack
      sx={{
        width : '80vw',
        marginTop : '-40px',
        padding : '10px'
      }}
      justifyContent={'space-between'}
      direction={'row'}>
        <Stack
        divider={<Divider
          sx={{
          marginLeft : '15px',
          marginTop : '23px',
          height : '20px'
          }}
          orientation='vertical' 
          flexItem/>}
        direction={'row'}>

    <Box>
    <h4>{boardWriter}</h4>
    </Box>
        <Box
        marginLeft={'15px'}
        >
      <h4>{boardDate}</h4>
      </Box>
      </Stack>
      <Stack direction={'row'}>
      <Box marginLeft={'-150px'}>
        <h5>조회수 { boardView + 1 }</h5>
      </Box>
      <Box marginLeft={'10px'}>
        <h5>댓글 {commentCountValue}</h5>
      </Box>
      </Stack>
      </Stack>
      <Divider variant="inset"
      sx={{
        marginLeft : '0px',
        marginTop : '-18px',
        width : '80vw',
        borderColor : '#00B4D8'
      }}
      />
      <Box
      width={'78vw'}
      marginTop={'10px'}
      display={'flex'}
      justifyContent={'space-between'}
      >
      <Box>

      </Box>
      <Box height={'30px'}>
      <BoardAuth auth={boardWriter} boardNum={boardNumber}/>
      </Box>
      </Box>
      <Box
      padding={'10px'}
      width={'80vw'}
      minHeight={'200px'}
      display={'flex'}
      >
      <Suspense fallback={<CircularProgress color="primary" />}>
      <Box width={'80vw'} dangerouslySetInnerHTML={{__html:boradContent}}></Box>
      </Suspense>
      </Box>
      <Stack
      sx={{
        width : '80vw'
      }}
      justifyContent={'space-between'}
      direction={'row'}>
      <Box></Box>
      <Box 
      top={'50px'}
      alignItems={'center'}
      display={'flex'}
      position={'relative'}>
      <Button onClick={() => navigate(-1)}>목록으로</Button>
    </Box>
    </Stack>
    <Box width={'80vw'}>
    <BoardCommentList boardNum={boardNumber} />
    </Box>
    </Box>
    </Box>
  )
};

export default BoardDetail;
