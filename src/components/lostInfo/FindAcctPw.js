import React, { useRef, useState } from "react";
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

export default function FindAcctPw() {
  /* ====== 버튼 활성화 종합 조건 ============================================= */
const [fillForm, setFillForm] = useState(false);
const id = useRef("");
const email = useRef("");
const birthdate = useRef("");
const fullName = useRef("");
const mobile = useRef("");
const [btnOff, setBtnOff] = useState(true);

const btnChange = (e) => {
  e.preventDefault(); 
    const idFin = id.current.value;
    const emailFin = email.current.value;
    const birthdateFin = birthdate.current.value;
    const fullNameFin = fullName.current.value;
    const mobileFin = mobile.current.value;

    /* 조건1. Form 채웠는지 여부 확인 */
    ( 
      idFin.length > 0 
      && emailFin.length > 0 
      && birthdateFin.length > 0 
      && fullNameFin.length > 0 
      && mobileFin.length > 0 
      ? setFillForm(true)
      : setFillForm(false)
    );
    /* 조건2: 입력값에 대한 계정 확인 */

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
/* ====== 버튼 활성화 종합 조건 End ============================================= */

/* ===={ Modal 이벤트}======================================================== */
  /* ////// 찾기 Modal창 여닫기 ////// */
  const [openForm, setOpenForm] = React.useState(false);
  const handleOpenForm = () => setOpenForm(true);
  const handleCloseForm = () => setOpenForm(false);

  /* ////// 결과 Modal창 여닫기 ////// */
  const [openResult, setOpenResult] = React.useState(false);
  const handleOpenResult = () => setOpenResult(true);
  const [SerchId, SetSerchId] = React.useState();
  /* 비번찾기시 입력한 정보 제출하기 */
  const handleSubmit = (e) => {
    e.preventDefault();
    const findInfo = new FormData(e.currentTarget);
    console.log({
      id: findInfo.get("id"),
      email: findInfo.get("email"),
      birthdate: findInfo.get("birthdate"),
      fullName: findInfo.get("fullName"),
      mobile: findInfo.get("mobile"),
    });
    axios.get(`http://localhost:9000/findPw?mem_id=${findInfo.get("id")}&mem_email=${findInfo.get("email")}&mem_name=${findInfo.get("fullName")}&mem_tel=${findInfo.get("mobile")}`)
    .then(response => {
      console.log(response.data);
     if(response.data.MEM_ID == '찾으시는 아이디가 없습니다.'){
      setOpenResult(false);
      alert('찾으시는 아이디가 없습니다.')
     }
     else{
      SetSerchId(response.data.MEM_ID)
      }
      
    })
    
  };
  console.log(SerchId);

  /* (모달)변경한 비밀번호 일치여부 helperText 이벤트 ////// */
  const [pwMsg, setPwMsg] = useState('');
  const updatedPw = useRef("");
  const updatedPwCk = useRef("");
  const pwMatch = (e) => {
    e.preventDefault(); 
    const updatedPwFin = updatedPw.current.value;
    const updatedPwCkFin = updatedPwCk.current.value;
    (
      (updatedPwCkFin.length > 0) && (updatedPwFin!==updatedPwCkFin)
      ? setPwMsg("비밀번호가 일치하지 않습니다.")
      : setPwMsg("")
    )
  return pwMsg;
 };

 /* (모달)입력창 채워야 버튼 활성화 이벤트 */
 const [mBtnOff, setMBtnOff] = useState(true);
const mBtnAble = (e) => {
  e.preventDefault(); 
  const updatedPwFin = updatedPw.current.value;
  const updatedPwCkFin = updatedPwCk.current.value;
  (
    updatedPwFin!==updatedPwCkFin
    ? setMBtnOff(true)
    : setMBtnOff(false)
  )
return mBtnOff;
}
/* onChange에 대한 비밀번호 일치 및 변경 버튼 이벤트  */
const mBtnChange = e => {
  pwMatch(e) // return pwMsg
  mBtnAble(e) // return btn
}

/* 제출 버튼 이벤트 */
  const onSubmit = (e) => {
    e.preventDefault();
    const updatedPwFin = updatedPw.current.value;
    const updatedPwCkFin = updatedPwCk.current.value;
    console.log(SerchId);
    axios.get(`http://localhost:9000/UpdatePw?mem_id=${SerchId}&mem_pw=${updatedPwCkFin}`)
    .then(response => {
      console.log(response.data);
    })
    return window.confirm("비밀번호가 변경되었습니다.")
          ,setOpenForm(false)
          // ,(window.location.href = "/signin");
        };
/* ===={ Modal 이벤트 END }======================================================== */
  return ( 
    <div>
      <Box onClick={handleOpenForm}>
        <Typography align="center" variant="h5">
          비밀번호 찾기
        </Typography>
      </Box>
      <Modal open={openForm} onClose={handleCloseForm}>
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <Typography align="center" variant="h4">
            비밀번호 찾기
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
                label="아이디"
                id="id"
                name="id"
                inputRef={id}
                onChange={btnChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
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
                type="submit"
                variant="contained"
                onClick={handleOpenResult}
                sx={{
                  mt: 3,
                  mb: 2,
                  color: "000",
                  bgcolor: "palette.lo",
                  "&:hover": { bgcolor: "palette.no" },
                }}
              >
                비밀번호 찾기
              </Button>
{/* ////// 결과있음: 비밀번호 수정 Modal  ////////////////////////*/}
              <Modal open={openResult} onClose={handleCloseForm}>
                <Box sx={style}>
                  <Box
                    component="form"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Typography align="center">
                      비밀번호를 변경해주세요.
                    </Typography>
                    <Grid container spacing={3} sx={{ pt: 4 }}>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          type="password"
                          id="updatedPw"
                          inputRef={updatedPw}
                          label="새 비밀번호"
                          helperText={"영문대소문자, 숫자, 특수문자 조합으로 10~17자, 공백불가"}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          type="password"
                          id="updatedPwCk"
                          inputRef={updatedPwCk}
                          label="비밀번호 확인"
                          onChange={mBtnChange}
                          helperText={pwMsg}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      disabled={mBtnOff}
                      onClick={onSubmit}
                      href="/signin"
                      variant="contained"
                      sx={{
                        mt: 4,
                        bgcolor: "palette.lo",
                        "&:hover": { bgcolor: "palette.no" },
                      }}
                    >
                      변경
                    </Button>
                  </Box>
                </Box>
              </Modal>
              {/* /// 결과없음: 가입or아이디 찾기 modal: DB연결후 조건부로 수정 ////////////////////////*/}
              {/*           <Modal
              open={openResult}
              onClose={handleCloseForm}
              >
                 <Box sx={style} >
                   <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                   <Typography align="center">존재하지 않는 계정입니다.</Typography>
                <Button  
                href='/findacct' 
                variant="contained"
                sx={{bgcolor:"palette.lo",'&:hover': {bgcolor: 'palette.no'}}}>
                  아이디 찾기</Button>
                   </Box>
                 </Box>
              </Modal> */}
            </Grid>
            <Grid item>
              <Button
                onClick={handleCloseForm}
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: "palette.lo",
                  "&:hover": { bgcolor: "palette.no" },
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
