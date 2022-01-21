import './App.css';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Home from './pages/Home';
import Naukaschools from './pages/Naukaschools';
import Events from './pages/Events';
import Publication from './pages/Publication';
import Predmetschools from './pages/Predmetschools';
import Achievements from './pages/Achievements';
import Contacts from './pages/Contacts';
import Layout from './Layout';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='naukaschools' element={<Naukaschools />} />
        <Route path='events' element={<Events />} />
        <Route path='publication' element={<Publication />} />
        <Route path='predmetschools' element={<Predmetschools />} />
        <Route path='achievements' element={<Achievements />} />
        <Route path='contact' element={<Contacts />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
