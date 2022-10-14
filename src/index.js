import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Flota from './Flota';
import Pantalla21 from './Componentes/Pantallas/Pantalla21';
import Pantalla22 from './Componentes/Pantallas/Pantalla22';
import Pantalla23 from './Componentes/Pantallas/Pantalla23';
import Pantalla231 from './Componentes/Pantallas/Pantalla231';
import Pantalla232 from './Componentes/Pantallas/Pantalla232';

//import Reportes from './Reportes';
import { AmplifyProvider } from '@aws-amplify/ui-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path="pantalla21" element={<Pantalla21 />} />
        <Route path="/" element={<App />} />

        <Route path="pantalla22" element={<Pantalla22 />} />
        <Route path="/" element={<App />} />

        <Route path="pantalla23" element={<Pantalla23 />} />
        <Route path="/" element={<App />} />

        <Route path="pantalla231" element={<Pantalla231 />} />
        <Route path="/" element={<App />} />

        <Route path="pantalla232" element={<Pantalla232 />} />
        <Route path="/" element={<App />} />
      </Routes>
      {/* <App /> */}

    </BrowserRouter>

  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
