import React from "react";
import './index.css';
import { Routes, Route  } from 'react-router-dom';
import * as Pages from './Pages'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/projects" element={<Pages.Projects />} />
        <Route path="/contact" element={<Pages.Contact />} />
    </Routes>
    </>
  );
}

export default App;
