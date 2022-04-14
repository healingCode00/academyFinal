import React, { useRef, useState } from "react";
import {
  Button,
  Box,
  Typography,
  TextField,
  Grid,
  Modal,
  Link,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Footer from "../../components/main/Footer";
import axios from 'axios'

const theme = createTheme({
  palette: {
    palette: {
      lb: "#8ecae6",
      nb: "#219ebc",
      db: "#023047",
      lo: "#ffb703",
      no: "#fb8500",
    },
  },
});
/* 모달창 스타일 */
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

/* ///// Biz_info 함수 ///////////////////////////////////////////////// */
function Biz_info() {
    /* 유효성검사 */
    const [value, setValue] = useState('');
    const [valId, setValId] = useState('');
    const [valPw, setValPw] = useState('');

    // const onChange = (e) => {
    //   const valValue = e.target.value;
    //   //console.log(e.target.name)
    //   if(e.target.name = "signupId") {
    //     let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
    //     return check.test(value);
    //    } if(e.target.name = "signupPw"){
    //     return console.log(`비번: ${valValue}`);
    //   }
    // }
    const validation = () => {
      let check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
      return check.test(value);
    }
  // form과 submit이용하는 경우
  // const handleSubmit = (event) => {
  //   const signInData = new FormData(event.currentTarget);
  //   console.log({
  //     id: signInData.get('id')
  //     , pw: signInData.get('pw')
  //     , biznum: signInData.get('biznum')
  //     , bizname: signInData.get('bizname')
  //     , bizowner: signInData.get('bizowner')
  //     , mobile: signInData.get('mobile')
  //   });
  // }

  /* ref이용해서 데이터 가져오는 경우 */
  const [msg, setMsg] = useState('');
  const signupId = useRef("");
  const signupPw = useRef("");
  const signupPwCk = useRef("");
  const signupBiznum = useRef("");
  const signupBizname = useRef("");
  const signupBizowner = useRef("");
  const signupMobile = useRef("");
  const signupEmail = useRef("");


 /* 아이디 중복확인용 변수 */
 const idCk = signupId.current.value;

/* 제출 */
  const sendValue = (event) => {
    const signupInfo = {
      signupId: signupId.current.value,
      signupPw: signupPw.current.value,
      signupBiznum: signupBiznum.current.value,
      signupBizname: signupBizname.current.value,
      signupBizowner: signupBizowner.current.value,
      signupMobile: signupMobile.current.value,
      signupEmail: signupEmail.current.value,
    };
    axios.get(`http://localhost:9000/memberBizInsert?mem_id=${signupInfo.signupId}&mem_pw=${signupInfo.signupPw}
    &mem_biznum=${signupInfo.signupBiznum}&mem_bizname=${signupInfo.signupBizname}&mem_name=${signupInfo.signupBizowner}
    &mem_tel=${signupInfo.signupMobile}&mem_email=${signupInfo.signupEmail}`)
    .then((response) => {
        console.log(response.data)
    })
    return console.log(signupInfo);  
  };

  /* 중복확인 모달 이벤트 */
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [IdCheckName, setIdCheckName] = useState('');
  
  /* //////비밀번호 일치여부 확인 ////// */
  const [pwMsg, setPwMsg] = useState('');
  const pwMatch = (e) => {
    e.preventDefault();
    const signupPwFin = signupPw.current.value;
    const signupPwCkFin = signupPwCk.current.value;
    (
      signupPwFin!==signupPwCkFin
      ? setPwMsg("비밀번호가 일치하지 않습니다.")
      : setPwMsg("")
    )
  return pwMsg;
 };

   /* 입력창 채워야 버튼 활성화 이벤트 */
   const [btnOff, setBtnOff] = useState(true);
 
 /* ====== 3. 버튼 활성화 종합 조건(1func) ============================================= */
 const [fillForm, setFillForm] = useState(false);
 const btnChange = (e) => {
   e.preventDefault(); 
     const signupIdFin = signupId.current.value;
     const signupPwFin = signupPw.current.value;
     const signupBiznumFin = signupBiznum.current.value;
     const signupBiznameFin = signupBizname.current.value;
     const signupBizownerFin = signupBizowner.current.value;
     const signupMobileFin = signupMobile.current.value;
     const signupEmailFin = signupEmail.current.value;
     /* 조건1. Form 채웠는지 여부 확인 */
     ( 
      signupIdFin.length > 0 
       && signupPwFin.length > 0 
       && signupBiznumFin.length > 0 
       && signupBiznameFin.length > 0 
       && signupBizownerFin.length > 0 
       && signupMobileFin.length > 0 
       && signupEmailFin.length > 0 

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


  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            mb: 8,
          }}
        >
          <Typography variant="h5" sx={{ mt: 2 }}>
            사업자 가입하기
          </Typography>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            sx={{width: 500 }}
          >
            <Grid container spacing={3} sx={{ pt: 4 }}>
              <Grid item xs={11}>
                <TextField
                  autoFocus
                  required
                  fullWidth
                  label="아이디"
                  id="signupId"
                  name="signupId"
                  inputRef={signupId}
                  onChange={btnChange}
                  helperText={"영문 소문자,숫자 조합, 4~16자, 공백 불가"}
                  />
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  size="small"
                  onClick={handleOpen}
                  sx={{
                    bgcolor: "palette.lb",
                    "&:hover": { bgcolor: "palette.nb" },
                  }}
                >
                  중복
                  <br />
                  확인
                </Button>
                <Modal open={open} onClose={handleClose}>
                  <Box
                    sx={style}
                    component="form"
                    // onSubmit={handleSubmit}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid container >
                      <Grid item xs={11}>
                        <Typography align="center" variant="h5">
                          {idCk}
                        </Typography>
                        <Typography align="center" variant="h6" sx={{ mt: 2 }}>
                          사용이 가능한 아이디입니다.
                        </Typography>
                      </Grid>
                      <Grid item xs={11} align="center">
                        <Button
                          onClick={handleClose}
                          variant="contained"
                          sx={{
                            mt: 3,
                            mb: 2,
                            bgcolor: "palette.lo",
                            "&:hover": { bgcolor: "palette.no" },
                          }}
                        >
                          확인
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </Modal>
              </Grid>
              <Grid item xs={11}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  label="비밀번호"
                  id="signupPw"
                  name="signupPw"
                  inputRef={signupPw}
                  onChange={btnChange}
                  helperText={"영문 대소문자, 숫자, 특수문자 중 2가지 이상 조합, 10~17자, 공백불가"}
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  required
                  fullWidth
                  type="password"
                  label="비밀번호 확인"
                  id="signupPwCk"
                  name="signupPwCk"
                  inputRef={signupPwCk}
                  onChange={pwMatch}
                  helperText={pwMsg}
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  required
                  fullWidth
                  label="사업자번호"
                  id="signupBiznum"
                  name="signupBiznum"
                  inputRef={signupBiznum}
                  onChange={btnChange}
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  required
                  fullWidth
                  label="사업장명"
                  id="signupBizname"
                  name="signupBizname"
                  inputRef={signupBizname}
                  onChange={btnChange}
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  required
                  fullWidth
                  label="사업자명"
                  id="signupBizowner"
                  name="signupBizowner"
                  inputRef={signupBizowner}
                  onChange={btnChange}
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  required
                  fullWidth
                  label="연락처"
                  id="signupMobile"
                  name="signupMobile"
                  inputRef={signupMobile}
                  onChange={btnChange}
                />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  required
                  fullWidth
                  id="signupEmail"
                  label="이메일"
                  name="signupEmail"
                  inputRef={signupEmail}
                />
              </Grid>
              <Grid item xs={11}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  onClick={sendValue}
                  disabled={btnOff}
                  href="/joinCompl"
                  sx={{
                    color: "000",
                    bgcolor: "palette.lo",
                  }}
                >
                  가입하기
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Biz_info;
