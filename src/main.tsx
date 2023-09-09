import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { CoreContextProvider } from './features/core/context/CoreContext';

// eslint-disable-next-line no-undef
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <CoreContextProvider>
      <App />
    </CoreContextProvider>
  </React.StrictMode>
);
