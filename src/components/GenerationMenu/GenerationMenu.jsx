import React from 'react';
import ButtonLink from '../ButtonLink/ButtonLink';
import { Typography, Grid, Box, Card, CardContent, CardActions, IconButton } from '@mui/material';
import { useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { FaInfoCircle, FaCog } from "react-icons/fa"; // Importa los iconos necesarios
import iconos from "../../services/objIcons";
import IconComponent from "../../services/objIcons";
import { Handshake } from '@mui/icons-material';

const GenerationMenu = () => {

  const location = useLocation();
  const object = location.state;
  console.log(object)
  if (!object) {
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

  const handleLinkClick = (link) => {
    alert();
    console.log(link);
    // Verificar si la propiedad 'link' es una URL válida
    if (link && /^(http|https):\/\/.*/.test(link)) {
      // La propiedad 'link' es una URL (http o https)
      console.log('Es una URL válida:', link);
      window.location.reload();
    } else {
      // La propiedad 'link' no es una URL
      console.log('No es una URL válida o la propiedad link no está presente.');
      // Recargar la página
      window.location.reload();
    }
  }

  if(object?.enlaces === undefined){
    window.location.reload();

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
       //   {console.log(item)}
          // const imagePath = `/images/demo.jpg`; // Asegúrate de que imageName sea el nombre de tu imagen
          const imagePath = `/images/${item.image}`; // Asegúrate de que imageName sea el nombre de tu imagen

          return (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <Card sx={{ margin: 2, padding: 2, textAlign: 'center' }}>
                {/* Logo de Ingresos/Egresos en la parte superior */}
                <Box sx={{ position: 'relative' }}>
                  <IconButton sx={{ position: 'absolute', top: 0, right: 0 }}>
                    <FaCog />
                  </IconButton>
                  {/* <img src={item.logo} alt="Logo" style={{ width: '100%', maxHeight: '100%', objectFit: 'contain' }} /> */}
                  <img
                    src={imagePath}
                    alt="Logo"
                    style={{ width: '100%', height: '150px', borderRadius: '8px 8px 0 0' }}
                  />
                    {/* <img
                    src={item.logo}
                    alt="Logo"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                  /> */}
                </Box>
                <CardContent>
                  <Typography variant="subtitle2" sx={{ textAlign: 'left' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body1" sx={{ textAlign: 'left', mt: 2 }}>
                    Ingreso: {item.ingreso} Gs<br />
                    Egreso: {item.egreso} Gs<br />
                    Resultado: {item.ingreso - item.egreso} Gs
                  </Typography>
                  <IconComponent iconName="FaInfoCircle" />
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  {/* Botón "Ir a la página" más pequeño y centrado */}
                  <ButtonLink
                    obj={item.menu}
                    color={item.color}
                    key={item.id}
                    target={item.target}
                    to={item.link}
                    size="small"
                    onClick={() => {
                      handleLinkClick(item.link);
                    }}
                  >
                    Ir a la página
                  </ButtonLink>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default GenerationMenu;
