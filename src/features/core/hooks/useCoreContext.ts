import { useContext } from 'react';
import { CoreContext } from '../context/CoreContext';

export function useCoreContext() {
  const context = useContext(CoreContext);
  if (!context) {
    throw new Error('CoreContext is unreachable.');
  }
  return context;
}
