import { Box, Typography } from "@mui/material";
import React from "react";
import { stylesnew } from "./styles";
import { useTheme } from "@mui/material/styles";

function continer({title = "",contant,icon}) {
  const theme = useTheme();
  const styles = stylesnew(theme);
  return (
    <Box sx={styles.left}>
      <Box sx={styles.con_l}>
        <Typography sx={styles.con_l_head}>{title}</Typography>
        <Typography sx={styles.con_l_body}>
          {contant}
        </Typography>
      </Box>
      <Box sx={styles.con_r}>
        <img src={icon} />
      </Box>
    </Box>
  );
}

export default continer;
