import React from "react";
import * as Icons from "react-icons/fa"; // Importar todos los iconos de react-icons/fa

const getIconComponent = (iconName) => {
  const icon = Icons[iconName]; // Obtener el componente de icono correspondiente según el nombre

  return icon ? React.createElement(icon) : null;
};

const IconComponent = ({ iconName }) => {
  const IconComponent = getIconComponent(iconName);

  return <div>{IconComponent}</div>;
};

export default IconComponent;
