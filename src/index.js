import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainPageContainer } from './pages/MainPage/MainPage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <MainPageContainer list = {[{
          href: '/company',
          title: 'О компании'
      }, {
          href: '/catalog',
          title: 'Каталог'
      }, {
          href: '/catalogue',
          title: 'Каталог другой'
      }, {
          href: '/about',
          title: 'О нас'
      }]}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
