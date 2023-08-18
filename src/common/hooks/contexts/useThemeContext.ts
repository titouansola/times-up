import { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Theme Context undefined');
  }
  return context;
}
