import React from "react";
import {
  Box,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

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

function JoinCompl() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            mt: 8,
            mb: 10,
            display: "flex",
          }}
        >
          <Typography align="center" variant="h5">
            Hi. Camping 에 가입해 주셔서 감사합니다.
            <br />
            제휴를 위해 담당 부서에서 검토 후 연락 드리겠습니다.
          </Typography>
          <Typography align="center" variant="h6"  sx={{ mb: 4 }}>
            ※ 평균 2 ~ 5 영업일 소요
          </Typography>
          <Button
            variant="contained"
            href="./"
            sx={{
              mt: 3,
              bgcolor: "palette.lo",
              "&:hover": { bgcolor: "palette.no" },
            }}
          >
            홈으로
          </Button>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default JoinCompl;
