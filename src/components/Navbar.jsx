import {
  AppBar,
  Badge,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { Coffee, Mail } from "@mui/icons-material";
import React from "react";
import { Box } from "@mui/system";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI
        </Typography>
        <Coffee sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search.." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
