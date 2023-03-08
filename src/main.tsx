import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalReset } from './styles/GlobalReset';
import { GlobalStyles } from './styles/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalReset />
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
