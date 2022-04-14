import React, { useEffect, useState } from 'react'
import {
  Stack,
  Box,
  TextField,
  Button
  } from '@mui/material'
import CertificationConfirm from '../../components/join/CertificationConfirm';
import { emailOverlap } from '../../components/board/MappingDB'
import { domainSelectState, emailInputState, emailState, domainDirectState } from '../../components/board/RecoilAtom'
import { useRecoilState } from 'recoil'
import axios from 'axios';
import DomainSelect from '../../components/join/DomainSelect';

function Certification() {

  const [inputState, setInputState] = useRecoilState(emailInputState)
  const [selectState, setSelectState] = useRecoilState(domainSelectState)
  const [directState, setDirectState] = useRecoilState(domainDirectState)
  const [state, setState] = useRecoilState(emailState)
  const [checkResult, setCheckResult] = useState('')

  const handleChange = (e) => {
    setInputState(e.target.value)
  }


  const overlapCheck = async() => {
    const res = await axios.get(emailOverlap + state)
      if(res.data[0].MEM_EMAIL === 'undefined'){
        setCheckResult('입력하신 이메일로 가입이 가능합니다.')
      }
      else {
        setCheckResult('입력하신 이메일로 가입된 아이디가 있습니다.')}
        console.log(res.data[0].MEM_EMAIL)
  }

  const handleClick = () => {
    if(inputState !== '' && selectState !== ''){
    setState(inputState + '@' + selectState + directState)}
  else {
    setCheckResult('유효하지 않은 이메일입니다.')
  }
}

  useEffect(() => {
    console.log(state)
    if(state !== '' && selectState !== '' && inputState !== '')
    overlapCheck()
  }, [state])

  return (
    <Stack
    alignItems={'center'}
    alignContent={'center'}
    textAlign={'center'}>
      <Box marginTop={'150px'}>
      <h1>Hi Camping</h1>
      </Box>
      <Box >
        <h4>가입을 위해서 이메일 인증이 필요합니다. 이메일을 입력해주세요.</h4>
      </Box>
      <Box
      alignItems={'center'}
      alignContent={'center'}
      display={'flex'}>
      <TextField
      sx={{
        width : '300px'
      }}
      onChange={handleChange}
      autoComplete='off' 
      label="이메일" 
      value={inputState}
      variant="outlined" />
      <Box width={'50px'}>
      <h2>@</h2>
      </Box>
      <Box>
        <DomainSelect />
      {/* <FormControl  
      sx={{
      width : 200
    }} fullWidth>
      <InputLabel >도메인</InputLabel>
    <Select
    value={selectState}
    onChange={handleSelect}
  >
    <MenuItem value={'@daum.net'}>daum.net</MenuItem>
    <MenuItem value={'@dreamwiz.com'}>dreamwiz.com</MenuItem>
    <MenuItem value={'@empas.com'}>empas.com</MenuItem>
    <MenuItem value={'@freechal.com'}>freechal.com</MenuItem>
    <MenuItem value={'@gmail.com'}>gmail.com</MenuItem>
    <MenuItem value={'@kakao.com'}>kakao.com</MenuItem>
    <MenuItem value={'@nate.com'}>nate.com</MenuItem>
    <MenuItem value={'@naver.com'}>naver.com</MenuItem>
    <MenuItem value={''}>직접입력</MenuItem>
  </Select>
  </FormControl> */}
    </Box>
    <Button sx={{height : '42px', marginLeft : '20px'}} variant='outlined' onClick={handleClick}>중복확인</Button>
      </Box>
      <Box>
      <h3>{checkResult}</h3>
    </Box>
    <Box>
      <CertificationConfirm result={checkResult}/>
    </Box>
    </Stack>
  )
};

export default Certification;
