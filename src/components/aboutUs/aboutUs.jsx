import { Box, Grid2, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import photo from "../../assets/img1.png";
import { datastore } from "../../features/store";
import Container from "./continer";
import { stylesnew } from "./styles";

function aboutUs() {
  const theme = useTheme();
  const styles = stylesnew(theme);

  const Condata = datastore((state) => state.Condata);

  return (
    <Box sx={styles.boxabout}>
      <Box sx={styles.About}>About Us</Box>
      <Box sx={styles.box1}>
        <Box sx={styles.phothoes}>
          <img src={photo} />
        </Box>
        <Box sx={styles.Notes}>
          <Typography>
            Veridian is an investment, management and development company based
            in Gibraltar. We create value in our investments by leveraging our
            own experience, using tried-and-true strategies and extensive
            industry expertise.
          </Typography>
          <Typography>
            We work with our business management team to develop and implement
            tailored strategies focused on strong products with powerful sales,
            to develop profit generating growth models. Value creation is
            fundamental to our goal and we develop our businesses with this is
            mind
          </Typography>
          <Typography>
            Veridian's expertise is delivered with a responsible approach to our
            business, our team, our local community, and the environment.
          </Typography>
        </Box>
      </Box>

      <Box sx={styles.grid}>
      <Grid2  container spacing={3}>
        {Condata.map((item, index) => (
          <Grid2 key={item.id} xs={4} sm={6}>
            <Container
              title={item.heading}
              contant={item.body}
              icon={item.img}
            />
          </Grid2>
        ))}
      </Grid2>
      </Box>
    </Box>
  );
}

export default aboutUs;
