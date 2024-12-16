import { Box } from "@mui/material";
import React from "react";
import ContactsUs from "../components/contants/contacts.jsx";
import Home from "../components/home/home";
import AboutUs from "../components/aboutUs/aboutUs";
import CopyRight from "../components/copyRight/copyRight";
import InvestmentApproach from "../components/investmentApproach/investmentApproach";
import OurTeams from "../components/ourTeams/ourTeams";
import { stylesnew } from "./styles";
import { useTheme } from "@mui/material/styles";
// import photo1 from "../assets/leftrect.png";
// import photo2 from "../assets/rightrect.png";

function home() {
  const theme = useTheme();
  const styles = stylesnew(theme);
  return (
    <Box sx={styles.base}>
      <Box sx={styles.main}>
        <Home />
        <Box sx={styles.mid}>
          {/* <Box sx={styles.img1}>
            <img src={photo1} />
          </Box>
          <Box sx={styles.img2}>
            <img src={photo2} />
          </Box> */}
          <AboutUs />
          <OurTeams />
          <InvestmentApproach />
        </Box>
        <ContactsUs />
      </Box>
      <CopyRight />
    </Box>
  );
}

export default home;
