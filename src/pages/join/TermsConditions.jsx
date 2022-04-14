import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
        Box,
        Stack,
        Button,
        Tooltip,
        } from '@mui/material'
import Conditions from '../../components/join/Conditions';
import ConditionsAccept from '../../components/join/ConditionsAccept';
import { useRecoilValue } from 'recoil'
import { conditionsAcceptState } from '../../components/board/RecoilAtom'

function TermsConditions() {

  const navigate = useNavigate()
  const state = useRecoilValue(conditionsAcceptState)

  if(state === true)
  return (
    <>
    <Stack
    justifyContent={'center'}
    alignItems={'center'}
    alignContent={'center'}
    textAlign={'center'}>
      <Box>
      <h1>Hi Camping</h1>
      </Box>
      <Box>
        <h4>Hi Camping 회원으로 가입하기 위해서는 이용약관, 개인정보처리방침에 동의하셔야 합니다.</h4>
      </Box>
      <Box
        sx={{
        // border : '1px solid orange',
        width : '900px',
        height : '520'
        }}>
      <Conditions />
      </Box>
      <Box>
        <ConditionsAccept />
      </Box>
      <Box
      justifyContent={'space-between'}
      marginTop={'20px'}
      display={'flex'}>
        <Box>
        <Button
        sx={{
          color : 'white',
          width : '200px',
          height : '60px',
          ":hover" : {
            backgroundColor : 'white',
            color : 'black',
            borderColor : '#FF8500'
          }
        }}
        onClick={() => navigate('/Certification')}
        variant="contained">일반 회원</Button>
        </Box>
        <Box width={'200px'}></Box>
        <Box>
        <Button
        sx={{
          backgroundColor : '#00B4D8',
          color : 'white',
          width : '200px',
          height : '60px',
          ":hover" : {
            backgroundColor : 'white',
            color : 'black',
            borderColor : '#FF8500'
          }
        }}
        onClick={()=> navigate('/Biz_info')}
        variant="contained">사업자 회원</Button>
        </Box>
      </Box>
    </Stack>
    </>
  )
  else return(
    <>
    <Stack
    justifyContent={'center'}
    alignItems={'center'}
    alignContent={'center'}
    textAlign={'center'}>
      <Box>
      <h1>Hi Camping</h1>
      </Box>
      <Box>
        <h4>Hi Camping 회원으로 가입하기 위해서는 이용약관, 개인정보처리방침에 동의하셔야 합니다.</h4>
      </Box>
      <Box
        sx={{
        // border : '1px solid orange',
        width : '900px',
        height : '520'
        }}>
      <Conditions />
      </Box>
      <Box>
        <ConditionsAccept />
      </Box>
      <Box
      justifyContent={'space-between'}
      marginTop={'20px'}
      display={'flex'}>
        <Box>
        <Tooltip title="약관에 동의해주세요.">
        <span>
        <Button
        sx={{
          color : 'white',
          width : '200px',
          height : '60px',
          ":hover" : {
            backgroundColor : 'white',
            color : 'black',
            borderColor : '#FF8500'
          }
        }}
        variant="contained" disabled>일반 회원</Button>
        </span></Tooltip>
        </Box>
        <Box width={'200px'}></Box>
        <Box>
        <Tooltip title="약관에 동의해주세요.">
        <span>
        <Button
        sx={{
          backgroundColor : '#00B4D8',
          color : 'white',
          width : '200px',
          height : '60px',
          ":hover" : {
            backgroundColor : 'white',
            color : 'black',
            borderColor : '#FF8500'
          }
        }}
        // onClick={()=> navigate('/Biz_info')}
        variant="contained" disabled>사업자 회원</Button>
        </span></Tooltip>
        </Box>
      </Box>
    </Stack>
    </>
  )
};

export default TermsConditions;
