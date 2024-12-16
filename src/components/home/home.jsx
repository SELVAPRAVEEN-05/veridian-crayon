import { Box, Button } from "@mui/material";
import React from "react";
import { stylesnew } from "../../pages/styles";
import { PiArrowElbowRightDownBold } from "react-icons/pi";
import photo1 from "../../assets/group3.png";
import photo2 from "../../assets/group4.png";
import { useTheme } from "@mui/material/styles";
// import { useStorerrr } from "../../features/store";

function home() {
  const theme = useTheme();
  const styles = stylesnew(theme);
  return (
    <Box sx={styles.first}>
      <Box sx={styles.img1}>
        <img src={photo1} />
      </Box>
      <Box sx={styles.img2}>
        <img src={photo2} />
      </Box>
      <Box sx={styles.inside}>
        <Box sx={styles.Investment}>INVESTMENT MANAGEMENT</Box>
        <Box sx={styles.Empowering}>
          Empowering Investments with Expertise and Strategy
        </Box>
        <Button sx={styles.Knowmore}>
          <Box>Know more </Box>
          <Box sx={styles.arrow}>
            <PiArrowElbowRightDownBold />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}

export default home;
