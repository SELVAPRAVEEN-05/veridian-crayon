import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";
import { stylesnew } from './styles';

function ourTeams() {
  const theme = useTheme();
  const styles = stylesnew(theme);
  return (
    <Box sx={styles.layout}>
      hi
    </Box>
  )
}

export default ourTeams