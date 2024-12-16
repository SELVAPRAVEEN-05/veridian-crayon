import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import { stylesnew } from "./styles";
import { useTheme } from "@mui/material/styles";

function container({title,para1,para2,img}) {
  const theme = useTheme();
  const styles = stylesnew(theme);
  return (
    <Grid2 sx={styles.box}>
      <Box sx={styles.img}>
        <img src={img} />
      </Box>
      <Typography sx={styles.heading}>{title}</Typography>
      <Typography sx={styles.para}>
        {para1}
      </Typography>
      <Typography sx={styles.para}>
        {para2}
      </Typography>
    </Grid2>
  );
}

export default container;
