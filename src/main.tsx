import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CalculatorProvider } from './context/calculator';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CalculatorProvider>
      <App />
    </CalculatorProvider>
  </React.StrictMode>
);
