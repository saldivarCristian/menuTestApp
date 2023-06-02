import React, { useEffect, useState, Suspense } from "react";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import { Typography, Grid } from "@mui/material";
import { FaInfoCircle, FaBeer } from "react-icons/fa";
import { Box } from "@mui/material";
import { getJSON } from "../../services/getJson";
import { CircularProgress } from "@mui/material";
import iconos from "../../services/objIcons";
import IconComponent from "../../services/objIcons"

const Home = () => {
  const [datosJSON, setDatosJSON] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJSON()
      .then(data => setDatosJSON(data))
      .catch(error => console.log(error));
  }, []);

  if (!datosJSON) {
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

  // console.log(datosJSON)
  return (
    <Box sx={{ paddingTop: "64px" }}>
      <Typography variant="h5" align="center" sx={{ mt: 10, mb: 5 }}>
       {datosJSON.title}
        <br />
        <br />
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        { datosJSON.enlaces.map((item)=>{
            // const IconComponent = iconos[item.icon];

            // console.log(item.menu);

            return (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <ButtonLink
                  obj={item.menu}
                  color={item.color}
                  key={item.id}
                  target={item.target}
                  to={item.link}
                  // icon={<IconComponent />}
                  icon={ <IconComponent iconName="FaInfoCircle" />}
                  fullWidth
                >
                  {item.title}
                </ButtonLink>
              </Grid>
            );
        })}
        {/* <Grid item xs={12} sm={6} md={4}>
          <ButtonLink
            target="_blank"
            to="https://test.quattroinversiones.com/conectados/"
            icon={<FaInfoCircle />}
            fullWidth
          >
            Conectados
          </ButtonLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink
            target="_blank"
            to="https://test.quattroinversiones.com/valeria/"
            icon={<FaInfoCircle />}
            fullWidth
          >
            Valeria
          </ButtonLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink
            target="_blank"
            to="https://test.quattroinversiones.com/sistemakit/"
            icon={<FaInfoCircle />}
            fullWidth
          >
            Sistema kit / Juegos
          </ButtonLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink to="/menuStock" icon={<FaInfoCircle />} fullWidth>
            Stock
          </ButtonLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ButtonLink to="/menuComodinReca" icon={<FaInfoCircle />} fullWidth>
            Comodin Reca
          </ButtonLink>
        </Grid> */}
      </Grid>
    </Box>
  );
};

export default Home;
