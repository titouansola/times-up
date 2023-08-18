import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  GameContextActionModel,
  GameContextStateModel,
} from '../../model/game-context';
import { SECOND } from '../../constants/timer';
import {
  addWord,
  currentPhaseDescription,
  currentTeam,
  currentWord,
  nextWord,
  startPhase,
  startRound,
  updateTimer,
  updateWord,
} from '../../services/game';
import { initialState } from '../../constants/game';

export function useGameService() {
  const [state, setState] = useState(initialState);
  const actions = useGameServiceActions(state, setState);
  useGameServiceEffects(state, actions);
  return { ...state, ...actions };
}

function useGameServiceActions(
  state: GameContextStateModel,
  setState: Dispatch<SetStateAction<GameContextStateModel>>
): GameContextActionModel {
  return {
    addWord: (w: string) => setState(addWord(w)),
    updateWord: () => setState(updateWord),
    updateTimer: () => setState(updateTimer),
    nextWord: () => setState(nextWord),
    startRound: () => setState(startRound),
    startPhase: () => setState(startPhase),
    restart: () => setState({ ...initialState }),
    currentWord: () => currentWord(state),
    currentTeam: () => currentTeam(state),
    currentPhaseDescription: () => currentPhaseDescription(state),
  };
}

function useGameServiceEffects(
  state: GameContextStateModel,
  actions: GameContextActionModel
) {
  useEffect(() => {
    if (state.roundIsRunning) {
      const interval = window.setInterval(actions.updateTimer, SECOND);
      return () => window.clearInterval(interval);
    }
  }, [state.roundIsRunning]);
}
