import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import { Typography, Grid } from '@mui/material';
import { Box } from '@mui/material';
import { useLocation, useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import iconos from "../../services/objIcons";
import IconComponent from "../../services/objIcons";


const GenerationMenu = () => {
  const location = useLocation();
  const object = location.state;
  console.log(object);
  if (!object) {
    // alert()
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: "164px", width: "100%", height: "100%" }}
      >
        <CircularProgress sx={{ margin: "0 8px" }} />
        <span>Cargando...</span>
      </Grid>
    );
  }

  return (
    <Box sx={{ paddingTop: "64px" }}>
      <Typography variant="h5" align="center" sx={{ mt: 10, mb: 5 }}>
        {object.title}
        <br />
        <br />
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {object.enlaces.map((item) => {
//          const IconComponent = iconos[item.icon];

  //        console.log(item.menu);

          return (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <ButtonLink
                obj={item.menu}
                color={item.color}
                key={item.id}
                target={item.target}
                to={item.link}
                icon={<IconComponent iconName="FaInfoCircle" />}
                fullWidth
              >
                {item.name}
              </ButtonLink>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default GenerationMenu;
