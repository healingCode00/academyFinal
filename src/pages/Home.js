import React from "react";
import {
  Box,
  Card,
  CardContent,
  createTheme,
  Divider,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import MainCarousel from "../components/main/MainCarousel";
import BestPlace from "../components/main/BestPlace";
import BestPosting from "../components/main/BestPosting";

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

function Home() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <MainCarousel />
        <Grid container spacing={4} sx={{ pt: 10, pr: 7, pb: 15, pl: 7 }}>
          <Grid item xs={6}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <CardContent>
                <Typography variant="h4" align="center" sx={{ pb: 2 }}>
                  Best Place
                </Typography>
                <Divider />
                <BestPlace />
                <Box
                  sx={{ display: "flex", flexDirection: "row-reverse", pt: 2 }}
                >
                  <Link href="./promoList" underline="hover" color="palette.db">
                    {" "}
                    더 많은 캠핑장 보기👉{" "}
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card variant="outlined" sx={{ padding: 2 }}>
              <CardContent>
                <Typography variant="h4" align="center" sx={{ pb: 2 }}>
                  Best Posting
                </Typography>
                <Divider />
                <BestPosting />
                <Box
                  sx={{ display: "flex", flexDirection: "row-reverse", pt: 2 }}
                >
                  <Link href="./boardlist" underline="hover" color="palette.db">
                    {" "}
                    더 많은 게시글 보기👉{" "}
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Home;
