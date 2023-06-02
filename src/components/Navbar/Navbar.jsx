import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <AppBar color="default">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Quattro Test App
        </Typography>
        <IconButton color="inherit" onClick={toggleDrawer} edge="start" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
          <List>
            <ListItem button component={RouterLink} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Inicio" />
            </ListItem>
            {/* <ListItem button component={RouterLink} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Conectados" />
            </ListItem>
            <ListItem button component={RouterLink} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Admin Kit" />
            </ListItem>
            <ListItem button component={RouterLink} to="/menuStock" onClick={toggleDrawer}>
              <ListItemText primary="Stock" />
            </ListItem>
            <ListItem button component={RouterLink} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Valeria" />
            </ListItem>
            <ListItem button component={RouterLink} to="/menuComodinReca" onClick={toggleDrawer}>
              <ListItemText primary="Comodin Reca" />
            </ListItem> */}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
