import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { GameContextProvider } from './common/contexts/GameContext';
import { ThemeContextProvider } from './common/contexts/ThemeContext';

// eslint-disable-next-line no-undef
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <GameContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </GameContextProvider>
  </React.StrictMode>
);
