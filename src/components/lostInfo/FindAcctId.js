import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function FindAcctId() {
  const [openForm, setOpenForm] = React.useState(false);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  const [openResult, setOpenResult] = React.useState(false);
  const handleOpenResult = () => setOpenResult(true);
  // const handleCloseResult = () => setOpenResult(false);

  /* 입력창 채워야 버튼 활성화 이벤트 */
  const email = useRef("");
  const birthdate = useRef("");
  const fullName = useRef("");
  const mobile = useRef("");
  const [btnOff, setBtnOff] = useState(true);

/* ====== 3. 버튼 활성화 종합 조건(1func) ============================================= */
const [fillForm, setFillForm] = useState(false);
const btnChange = (e) => {
  e.preventDefault(); 
    const emailFin = email.current.value;
    const birthdateFin = birthdate.current.value;
    const fullNameFin = fullName.current.value;
    const mobileFin = mobile.current.value;

    /* 조건1. Form 채웠는지 여부 확인 */
    ( 
      emailFin.length > 0 
      && birthdateFin.length > 0 
      && fullNameFin.length > 0 
      && mobileFin.length > 0 
      ? setFillForm(true)
      : setFillForm(false)
    );
    /* 조건2. 입력값에 맞는 id 유무 확인 */
    

 /* 모든 조건이 맞을때 버튼 활성화 하기 */
  ( 
    fillForm
    ? setBtnOff(false) // btn on 
    // console.log("setFillForm이 true입니다.")
    : setBtnOff(true) // btn off
    // console.log("setFillForm이 False") 
 );
 return btnOff;
}
/* ====== 3. 버튼 활성화 종합 조건(1func) End ============================================= */
/* ====== 1. Form만 채우면 버튼 활성화되는 이벤트 ============================================= */
//  const btnAble = (e) => {
  //    e.preventDefault(); 
//    const emailFin = email.current.value;
//    const birthdateFin = birthdate.current.value;
//    const fullNameFin = fullName.current.value;
//    const mobileFin = mobile.current.value;
//    ( 
//      emailFin.length > 0 
//     && birthdateFin.length > 0 
//     && fullNameFin.length > 0 
//     && mobileFin.length > 0 
//     ? setBtnOff(false)
//     : setBtnOff(true)
//    )
//  return btnOff;
//  }
/* ==== 1. Form만 채우면 버튼 활성화되는 조건 End ============================================= */
/* ======================= 2. 버튼 활성화 복합 조건(Nfunc) ========================= */
//  const [fillForm, setFillForm] = useState(false);

//  const isFormFilled = (e) => {
//   e.preventDefault(); 
//   const emailFin = email.current.value;
//   const birthdateFin = birthdate.current.value;
//   const fullNameFin = fullName.current.value;
//   const mobileFin = mobile.current.value;
//   ( 
//    emailFin.length > 0 
//   && birthdateFin.length > 0 
//   && fullNameFin.length > 0 
//   && mobileFin.length > 0 
//   ? setFillForm(true)
//   : setFillForm(false)
//  )
//  return fillForm;
//  }
// /* onChange에 대한 비밀번호 일치 및 변경 버튼 이벤트  */
// const btnChange = (e) => {
//   isFormFilled(e)
//   (
//     fillForm
//     ? setBtnOff(false) // btn on 
//     : setBtnOff(true) // btn off
//   )
//   return btnOff;
// }
/* ====== 2. 버튼 활성화 복합 조건 End ============================================= */
  const [id,SetId] = React.useState('');
  const [idCheck,SetIdCheck] = React.useState('');
 /* 제출 이벤트 */
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const findInfo = new FormData(event.currentTarget);
    console.log({
      email: findInfo.get("email"),
      birthdate: findInfo.get("birthdate"),
      fullName: findInfo.get("fullName"),
      mobile: findInfo.get("mobile"),
    });
    axios.get(`http://localhost:9000/findId?mem_email=${findInfo.get("email")}&mem_name=${findInfo.get("fullName")}&mem_tel=${findInfo.get("mobile")}`)
    .then(response => {
      console.log(response.data);
      if(response.data == '찾으시는 아이디가 없습니다.' ){
        SetIdCheck('');
        SetId(response.data)
      }else{
        SetIdCheck('회원님의 아이디입니다.');
        SetId(response.data)
      }
    })

  };

  return (
    <div>
      <Box onClick={handleOpenForm}>
        <Typography align="center" variant="h5">
          아이디 찾기
        </Typography>
      </Box>
      {/* 찾기 modal */}
      <Modal open={openForm} onClose={handleCloseForm}>
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography align="center" variant="h4">
            아이디 찾기
          </Typography>
          <Typography align="center" variant="h6">
            회원가입시 사용한 정보를 입력해 주세요.
          </Typography>
          <Grid container spacing={3} sx={{ pt: 4 }}>
            <Grid item xs={12}>
              <TextField
                autoFocus
                required
                fullWidth
                label="이메일"
                id="email"
                name="email"
                inputRef={email}
                onChange={btnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="생년월일"
                id="birthdate"
                name="birthdate"
                inputRef={birthdate}
                onChange={btnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="성명"
                id="fullName"
                name="fullName"
                inputRef={fullName}
                onChange={btnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="연락처"
                id="mobile"
                name="mobile"
                inputRef={mobile}
                onChange={btnChange}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs>
              <Button
                disabled={btnOff}
                onClick={handleOpenResult}
                type="submit"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "000",
                  bgcolor: "palette.lo",
                  "&:hover": { bgcolor: "palette.no" },
                }}
              >
                아이디 찾기
              </Button>
              {/* //// 결과있음 modal  /////////////////// */}
              <Modal open={openResult} onClose={handleCloseForm}>
                <Box sx={style}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    {/* if ({id !== '찾으시는 아이디가 없습니다.'}) {
                      
                    } */}
                    <Typography align="center">
                                {idCheck}
                    </Typography>
                    <Typography align="center">{id}</Typography>
                    <Button
                      href="/signin"
                      variant="contained"
                      sx={{
                        bgcolor: "palette.lo",
                        mt:3,
                        "&:hover": { bgcolor: "palette.no" },
                      }}
                    >
                      로그인하러 가기
                    </Button>
                  </Box>
                </Box>
              </Modal>
              {/* //// 결과없음 modal: DB연결후 조건부로 수정 /////////////////////////////// else
              <Modal
              open={openResult}
              onClose={handleCloseResult}
              >
                 <Box sx={style} >
                   <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                   <Typography align="center">존재하지 않는 계정입니다.</Typography>
                     <Button  
                href='/가입페이지' 
                variant="contained"
                sx={{bgcolor:"palette.lo",'&:hover': {bgcolor: 'palette.no'}}}>
                  가입하러 가기</Button>          
                   </Box>
                 </Box>
              </Modal> 
              ////////////////////////////////////////////////////////////////////////////*/}
            
            </Grid>
            <Grid item>
              <Button
                onClick={handleCloseForm}
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "palette.lo",
                }}
              >
                취소
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
