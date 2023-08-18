import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useGameContext } from '../hooks/contexts/useGameContext';

type ThemeValue = 'standard' | 'red' | 'blue';
type ThemeContextModel = [ThemeValue, Dispatch<SetStateAction<ThemeValue>>];

export const ThemeContext = createContext<ThemeContextModel | null>(null);

export function ThemeContextProvider({ children }: PropsWithChildren) {
  const { currentTeamIndex, phaseIsRunning } = useGameContext();
  const [theme, setTheme] = useState<ThemeValue>('standard');

  useEffect(() => {
    if (!phaseIsRunning && theme !== 'standard') {
      return setTheme('standard');
    }
    if (phaseIsRunning && currentTeamIndex === 0 && theme !== 'red') {
      return setTheme('red');
    }
    if (phaseIsRunning && currentTeamIndex === 1 && theme !== 'blue') {
      return setTheme('blue');
    }
  }, [currentTeamIndex, phaseIsRunning]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
}
