import React from "react";
import { stylesnew } from "../../pages/styles";
import { Box } from "@mui/material";
import photo1 from "../../assets/Maskgroup1.png";
import photo2 from "../../assets/Maskgroup2.png";
import { FaArrowRight } from "react-icons/fa6";
import { useTheme } from "@mui/material/styles";


function contacts() {
  const theme = useTheme();
  const styles = stylesnew(theme);
  return (
    <Box sx={styles.last}>
      <Box sx={styles.img1}>
        <img src={photo1} />
      </Box>
      <Box sx={styles.img2}>
        <img src={photo2} />
      </Box>
      <Box sx={styles.lanka}>
        <Box sx={styles.contact}>Contact Us</Box>
        <Box>Have questions or need more information? Reach out to us at. </Box>
        <Box sx={styles.email}>
          <Box sx={styles.mail}>MAIL TO</Box>
          <Box>info@veridian.com</Box>
          <Box sx={styles.rarrow}>
            <FaArrowRight />
          </Box>
        </Box>
        <Box>'We're help to help!'</Box>
      </Box>
    </Box>
  );
}

export default contacts;
