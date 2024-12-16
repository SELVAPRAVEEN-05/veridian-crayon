import { Box, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import photo from "../../assets/Maskgroup.jpg";
import { stylesnew } from "./styles";
import { useTheme } from '@mui/material/styles';

function Header() {
  const theme = useTheme();
  const styles = stylesnew(theme);

  const [active, setActive] = useState("1");
  const tabs = [
    { label: "Home", value: "1" },
    { label: "About Us", value: "2" },
    { label: "Our Team", value: "3" },
    { label: "Investment Approach", value: "4" },
    { label: "Contact Us", value: "5" },
  ];

  const handleTabChange = (event, newValue) => {
    setActive(newValue);
  };

  return (
    <Box sx={styles.head}>
      <Box sx={styles.img}>
        <img src={photo} alt="Header Image" />
      </Box>

      <Tabs value={active} onChange={handleTabChange} sx={styles.tabs}>
        {tabs.map((tab) => (
          <Tab
            key={tab.value}
            value={tab.value}
            label={tab.label}
            sx={styles.tab}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default Header;
