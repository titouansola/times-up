import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import {
  GameContextActionModel,
  GameContextStateModel,
} from '../../model/game-context';
import { SECOND } from '../../constants/timer';
import {
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
) {
  return {
    updateWord: () => setState(updateWord),
    updateTimer: () => setState(updateTimer),
    nextWord: () => setState(nextWord),
    startRound: () => setState(startRound),
    startPhase: () => setState(startPhase),
    currentWord: () => currentWord(state),
  };
}

function useGameServiceEffects(
  state: GameContextStateModel,
  actions: GameContextActionModel
) {
  useEffect(() => {
    actions.updateWord();
  }, []);

  useEffect(() => {
    if (state.roundIsRunning) {
      // eslint-disable-next-line no-undef
      const interval = setInterval(() => actions.updateTimer, SECOND);
      // eslint-disable-next-line no-undef
      return () => clearInterval(interval);
    }
  }, [state.roundIsRunning]);
}
