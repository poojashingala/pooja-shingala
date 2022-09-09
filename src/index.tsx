import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { AppLayout } from '@awsui/components-react';
import MenuLateral from './components/Menu';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <AppLayout content={ <App /> } navigation={<MenuLateral />} />
  </React.StrictMode>
);

reportWebVitals();
