import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  Box,
  Link,
  Typography,
} from "@mui/material";

function Header(props) {
  const navigate = useNavigate();
  return (
    <div>
       <Box>
          <Typography
            align="left"
            variant="h2"
            gutterBottom
            sx={{ mb: 4, ml: 4 }}
          >
            <Link underline="none" color="inherit"
             onClick={() => navigate("/")}
            >
              <br />
              Hi, Camping
            </Link>
          </Typography>
        </Box>
    </div>
  );
}

export default Header;