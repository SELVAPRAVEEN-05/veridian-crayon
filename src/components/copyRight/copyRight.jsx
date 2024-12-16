import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from "@mui/material/styles";
import { stylesnew } from '../../pages/styles';

function copyRight() {
    const theme = useTheme();
  const styles = stylesnew(theme);
  return (
    <Box sx={styles.copyrightAb}>
        <Box sx={styles.Copyright}>
          <Box>
            COPYRIGHT © Veridian 2024. All rights reserved. Any and all content
            included on this website or incorporated by reference is protected
            by international copyright laws.
          </Box>
          <Box>Term of use</Box>
        </Box>
      </Box>
  )
}

export default copyRight