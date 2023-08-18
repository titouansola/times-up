import { GameContextStateModel } from '../model/game-context';

export const PHASE_ONE = 0;
export const PHASE_TWO = 1;
export const PHASE_THREE = 2;
//
export const MAX_PHASE = 3;
//
export const MAX_TEAM = 2;
//
export const MIN_WORD_NUMBER = 5;
export const initialState: GameContextStateModel = {
  currentTeamIndex: 0,
  currentWordIndex: -1,
  teamsWords: [[], []],
  teamsScores: [0, 0],
  words: [],
  time: 0,
  phase: 0,
  roundIsRunning: false,
  phaseIsRunning: false,
  gameIsOver: false,
};
