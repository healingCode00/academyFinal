import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  createTheme,
  Divider,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import PromoList from "../../components/promo/PromoList";

function PromoBoard(props) {
  return (
    <div>
      <ThemeProvider>
        <Box>
        <Grid container>
        <Grid item align="center" xs={2}>
        <Typography variant="h4">홍보</Typography>
        </Grid>
        <Grid item sx={{mr:2}}>
          <Button variant="contained" sx={{bgcolor: "#fb8500"}}>전체</Button>
        </Grid>
        <Grid item sx={{mr:2}}>
        <Button variant="contained" sx={{bgcolor: "#ffb703"}}>서울</Button>
        </Grid>
        <Grid item sx={{mr:2}}>
        <Button variant="contained" sx={{bgcolor: "#ffb703"}}>경기</Button>
        </Grid>
        <Grid item sx={{mr:2}}>
        <Button variant="contained" sx={{bgcolor: "#ffb703"}}>강원</Button>
        </Grid>
        <Grid item sx={{mr:2}}>
        <Button variant="contained" sx={{bgcolor: "#ffb703"}}>춘천</Button>
        </Grid>
        <Grid item sx={{mr:2}}>
        <Button variant="contained" sx={{bgcolor: "#ffb703"}}>전라</Button>
        </Grid>
        <Grid item sx={{mr:2}}>
        <Button variant="contained" sx={{bgcolor: "#ffb703"}}>경상</Button>
        </Grid>
        <Grid item sx={{mr:2}}>
        <Button variant="contained" sx={{bgcolor: "#ffb703"}}>제주</Button>
        </Grid>    
      </Grid>
        <PromoList />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default PromoBoard;
