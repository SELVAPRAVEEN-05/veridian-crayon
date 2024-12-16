import React from "react";
import { stylesnew } from "./styles";
import { useTheme } from "@mui/material/styles";
import { Box, Grid2, Typography } from "@mui/material";
import Containerbox from "./container";
import { datastore } from "../../features/store";

function investmentApproach() {
  const theme = useTheme();
  const styles = stylesnew(theme);

  const holidata = datastore((state) => state.holidata);
  return (
    <Box>
      <Box sx={styles.investmentApproach}>Holistic Investment Approach</Box>
      <Box>
        <Grid2 container spacing={4} sx={styles.con}>
        {holidata.map((item, index) => (
          <Grid2 key={item.id} >
            <Containerbox
              title={item.heading}
              para1={item.para1}
              img={item.img}
              para2={item.para2}
            />
          </Grid2>
        ))}
        </Grid2>
      </Box>
    </Box>
  );
}

export default investmentApproach;
