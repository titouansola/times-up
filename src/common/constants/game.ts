import { GameContextStateModel } from '../model/game-context';

export const MAX_PHASE = 3;
export const MAX_TEAM = 2;
export const initialState: GameContextStateModel = {
  currentTeamIndex: 0,
  currentWordIndex: -1,
  teamsWords: [[], []],
  teamsScores: [0, 0],
  words: ['banane', 'chameau', 'table', 'Kennedy'],
  time: 0,
  phase: 0,
  roundIsRunning: false,
  phaseIsRunning: false,
};
