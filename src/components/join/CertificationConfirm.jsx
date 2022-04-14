import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Box} from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil'
import { emailState } from '../board/RecoilAtom'

function CertificationConfirm(props) {

  const resultData = props.result
  const navigate = useNavigate()
  const [state, setState] = useRecoilState(emailState)
  const [open, setOpen] = useState(false);
  const [confirm, setConfirm] = useState('');

  const tempCode = '1234'

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setConfirm(e.target.value)
    console.log(confirm)
  }

  const handleSubmit = () => {
    if(confirm === tempCode){
      setOpen(false)
      navigate('/PersonalInfo')
    }
    else{
      alert('인증번호가 올바르지 않습니다.')
    }
  }

  const handleClose = () => {
    setOpen(false);
  };


  if(state !== '' && resultData === '입력하신 이메일로 가입이 가능합니다.')
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        이메일 인증하기
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>이메일 인증</DialogTitle>
        <DialogContent>
          <DialogContentText>
          {state} 주소로 메일이 발송되었습니다.<br/>
            인증번호를 입력해주세요.
          </DialogContentText>
          <TextField
            autoFocus
            autoComplete='off'
            margin="dense"
            label="인증번호"
            value={confirm}
            onChange={handleChange}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>확인</Button>
          <Button onClick={handleClose}>취소</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  else if(state !== '' && resultData === '입력하신 이메일로 가입된 아이디가 있습니다.')
  return (
    <>
    <Box display={'flex'}>
    <Button variant="outlined" onClick={()=>navigate('/')}>메인으로</Button>
    <Box sx={{width : 20}}></Box>
    <Button variant="outlined" onClick={()=>navigate('/SignIn')}>
    로그인
  </Button>
    </Box>
      </>
  )
  else
  return(
    <>
  </>
  )
}

export default CertificationConfirm
