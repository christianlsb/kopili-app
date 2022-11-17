import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Navigator from './routes';
import GlobalStyle from './globalStyle/globalStyle'
import { ProSidebarProvider } from 'react-pro-sidebar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <ProSidebarProvider>
     <BrowserRouter>
         <Navigator/>
     </BrowserRouter>
     <GlobalStyle/>
   </ProSidebarProvider>
 
  </>
);


