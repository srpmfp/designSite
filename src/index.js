import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Products from './components/products/Products';
import Nav from './components/nav/Nav'
import { BrowserRouter, Route, Routes } from "react-router"
import Team from './components/team/Team';
import Login from './components/login/Login';
import HelperApi from './components/helperApi/helperApi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Nav />
    <HelperApi />
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/products" element={<Products productImage={localStorage.getItem('productImages')} />} />
          <Route path="/team" element={<Team headshotImage={localStorage.getItem('headshotImages')} />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
