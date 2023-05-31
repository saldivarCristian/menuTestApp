import React from 'react';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import { Typography, Grid } from '@mui/material';
import { FaInfoCircle, FaBeer } from 'react-icons/fa';
import { Box } from '@mui/material';

const ComodinReca = () => {
  return (
       <Box sx={{ paddingTop: '64px' }}>

      <Typography variant="h5" align="center" sx={{ mt: 5, mb: 3 }}>
        Enlaces a los proyectos test stock
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink to="" icon={<FaBeer />} fullWidth>
            Admin 
          </ButtonLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink to="/" icon={<FaBeer />} fullWidth>
           App Reca
          </ButtonLink>
        </Grid>
       
      </Grid>
    </Box>
  );
};

export default ComodinReca;
