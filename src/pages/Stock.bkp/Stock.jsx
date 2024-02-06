import React from 'react';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import { Typography, Grid } from '@mui/material';
import { FaInfoCircle, FaBeer } from 'react-icons/fa';
import { Box } from '@mui/material';

const Stock = () => {
  return (
      <Box sx={{ paddingTop: '64px' }}>
         <p>Usuario: 1234</p>
        <p>Passwork: 123</p>
      <Typography variant="h5" align="center" sx={{ mt: 5, mb: 3 }}>
        Enlaces a los proyectos test stock
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink to="http://limon.quattropy.com/admin " icon={<FaInfoCircle />} fullWidth>
            Admin 
          </ButtonLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink to="http://limon.quattropy.com/browser" icon={<FaInfoCircle />} fullWidth>
           Navegador
          </ButtonLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink className="custom-button" to="http://limon.quattropy.com/descargar" icon={<FaInfoCircle /> } fullWidth>
            Descargas
          </ButtonLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Stock;
