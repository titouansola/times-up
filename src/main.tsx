import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { GameContextProvider } from './common/contexts/GameContext';

// eslint-disable-next-line no-undef
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <GameContextProvider>
      <App />
    </GameContextProvider>
  </React.StrictMode>
);
