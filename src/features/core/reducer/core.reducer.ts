import { ActionModel } from '../../../data/model/action.model';
import { initialGameState, gameReducer } from '../../game/reducer/game.reducer';
import { initialAppState, appReducer } from '../../app/reducer/app.reducer';
import {
  initialWordListState,
  wordListReducer,
} from '../../word-list/reducer/word-list.reducer';
import {
  initialScoreState,
  scoreReducer,
} from '../../score/reducer/score.reducer';
import {
  initialTimerState,
  timerReducer,
} from '../../timer/reducer/timer.reducer';

export function coreReducer(state: CoreState, action: ActionModel): CoreState {
  return {
    gameState: gameReducer(state.gameState, action),
    appState: appReducer(state.appState, action),
    wordListState: wordListReducer(state.wordListState, action),
    scoreState: scoreReducer(state.scoreState, action),
    timerState: timerReducer(state.timerState, action),
  };
}

export const initialState = {
  appState: initialAppState,
  gameState: initialGameState,
  wordListState: initialWordListState,
  scoreState: initialScoreState,
  timerState: initialTimerState,
};

export type CoreState = typeof initialState;
