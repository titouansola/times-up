import { createContext, PropsWithChildren } from 'react';
import { GameContextModel } from '../model/game-context';
import { useGameService } from '../hooks/business/useGameService';

export const GameContext = createContext<GameContextModel | null>(null);

export function GameContextProvider({ children }: PropsWithChildren) {
  return (
    <GameContext.Provider value={useGameService()}>
      {children}
    </GameContext.Provider>
  );
}
