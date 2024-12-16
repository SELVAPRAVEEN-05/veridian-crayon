import React from "react";
import Header from "../components/Header/header";
import Home from "../pages/home";
import { stylesnew } from "../styles/layout";
import Theme from "../themes/theme";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function routing() {
  const theme = useTheme();
  const styles = stylesnew(theme);
  return (
    <Theme
      children={
        <Box sx={styles.main}>
          <Box sx={styles.head}>
            <Header />
          </Box>
          <Box sx={styles.body}>
            <Home />
          </Box>
        </Box>
      }
    />
  );
}

export default routing;
