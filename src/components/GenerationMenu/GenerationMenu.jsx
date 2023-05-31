import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import { Typography, Grid } from '@mui/material';
import { FaInfoCircle, FaBeer } from 'react-icons/fa';
import { Box } from '@mui/material';

const GeneratioMenu = (object) => {
  const { name } = useParams();
  if( !object.title){
    return (<></>)
  }
  return (  
    <Box sx={{ paddingTop: '64px' }}>
        <Typography variant="h5" align="center" sx={{ mt: 5, mb: 3 }}>
          {/* Enlaces a los proyectos test stock */}
          { object.title }
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {
            object.enlaces.map((item)=>{
              // let menu = ""
              return (
                <>
                  <Grid item xs={12} sm={6} md={4}>
                    <ButtonLink to={item.link} object={item.enlaces} icon={item.icon} fullWidth>
                      Admin 
                    </ButtonLink>
                  </Grid>
                </>
              )
            })
          }
          {/* <Grid item xs={12} sm={6} md={4}>
            <ButtonLink to="https://test.quattroinversiones.com/valeria/" icon={<FaInfoCircle />} fullWidth>
              Admin 
            </ButtonLink>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ButtonLink to="/stock" icon={<FaBeer />} fullWidth>
            Descargas
            </ButtonLink>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ButtonLink className="custom-button" to="https://test.quattroinversiones.com/sistemakit" icon={<FaBeer /> } fullWidth>
            ...
            </ButtonLink>
          </Grid> */}
        </Grid>
    </Box>
  );
};

export default GeneratioMenu;
