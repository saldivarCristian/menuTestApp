import React from 'react';

import { BrowserRouter,  Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';


import  GenerationMenu from './components/GenerationMenu/GenerationMenu'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        {/* <Route path="/:name" element={<GeneratioMenu/>} /> */}
        <Route path="/menuConectados" element={<GenerationMenu />} />
        <Route path="/menuSistemaKit" element={<GenerationMenu />} />
        <Route path="/menuValeria" element={<GenerationMenu />} />
        <Route path="/menuStock" element={<GenerationMenu />} />
        <Route path="/menuComodinReca" element={<GenerationMenu />} />
        {/* <Route path="/menoContact" element={Contact} /> */}
        <Route path="*" component={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

function PageNotFound() {
  return (
    <div>
      <h2>Página no encontrada</h2>
      <p>La página que estás buscando no existe.</p>
    </div>
  );
}

export default App;