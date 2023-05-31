import React from 'react';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import { Typography, Grid } from '@mui/material';
import { FaInfoCircle, FaBeer } from 'react-icons/fa';
import { Box } from '@mui/material';

const Home = () => {
  return (
   <Box sx={{ paddingTop: '64px' }}>
      <Typography variant="h5" align="center" sx={{ mt: 5, mb: 3 }}>
        Enlaces a los proyectos test
       
        <br />
        <br />
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink target="_blank" to="https://test.quattroinversiones.com/conectados/" icon={<FaInfoCircle />} fullWidth>
            Conectados 
          </ButtonLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink  target="_blank"  to="https://test.quattroinversiones.com/valeria/" icon={<FaInfoCircle />} fullWidth>
            Valeria 
          </ButtonLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink  target="_blank"  to="https://test.quattroinversiones.com/sistemakit/" icon={<FaInfoCircle />} fullWidth>
            Sistema kit / Juegos 
          </ButtonLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink to="/menuStock" icon={<FaInfoCircle />} fullWidth>
           Stock
          </ButtonLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink to="/menuComodinReca" icon={<FaInfoCircle /> } fullWidth>
           Comodin Reca
          </ButtonLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
