import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import './ButtonLink.css';

const ButtonLink = ({ to, icon, children,className,color="primary" ,target="_self" ,obj={}}) => {
  return (
    <Link  to={to} state={obj} target={target} className={`button-link ${className}`  }>
      <Button 
          fullWidth
          startIcon={icon}
          variant="contained"
          color={color}
          size="large"
          sx={{
              width: '100%',
              height: '64px',  // Ajusta el valor según tu preferencia
              marginTop: '5px',  // Margen superior
              marginBottom: '5px',  // Margen inferior
            }}
      >
        {children}
        
      </Button>
    </Link>
  );
};

export default ButtonLink;
