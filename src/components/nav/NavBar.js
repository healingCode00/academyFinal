import React, { useState } from "react";
import { createTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Drawer,
  Grid,
  IconButton,
  ListItemText,
  List,
  ListItem,
  Divider,
  ListItemButton,
  Typography,
  TextField,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    palette: {
      lb: "#8ecae6",
      nb: "#219ebc",
      db: "#023047",
      lo: "#ffb703",
      no: "#fb8500",
      mode: "dark",
    },
  },
});

function NavBar(props) {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  /* 로그인 후 닉네임 보여주기 */
  var signinNick = "";

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
    >
<Box> 
        {signinNick === "" ? (
          <Typography align="center" sx={{ mt: 2, mb: 2 }}>
            로그인을 해주세요.
          </Typography>
        ) : (
          <Typography align="center" sx={{ mt: 2, mb: 2 }}>
            {signinNick}님 환영합니다
          </Typography>
        )}
      </Box> 

      <Divider />
      <Grid container spaxing={2} align="center" sx={{ padding: 2 }}>
        <Grid item xs={6}>
          <IconButton component="a" 
           onClick={() => navigate("/signin")}>
            <AccountCircleIcon fontSize="large" /> {/* 조건부 버튼 */}
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <IconButton>
            <DarkModeIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
      <Divider />
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List>
          <ListItem>
            <ListItemButton component="a" 
            onClick={() => navigate("/signin")}
            >
              <ListItemText align="center" primary="마이페이지" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton
              component="a"
              onClick={() => navigate("/BoardList")}
            >
              <ListItemText align="center" primary="자유게시판" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton 
            component="a" 
            onClick={() => navigate("/promolist")}>
              <ListItemText align="center" primary="홍보게시판" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ bottom: 10, position: "absolute" }}>
        <Typography align="center">Copyright © Team JavaCamp</Typography>
      </Box>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Grid
            container
            justifyContent="flex-end"
            position="fixed"
            sx={{ zIndex: "tooltip" }}
          >
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <MenuIcon fontSize="large" />
            </IconButton>
          </Grid>
          <Drawer
            sx={{ zIndex: "tooltip" }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default NavBar;
