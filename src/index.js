import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './routes';
import GlobalStyle from './globalStyle/globalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Navigator/>
    </BrowserRouter>
    <GlobalStyle/>
  </>
);


