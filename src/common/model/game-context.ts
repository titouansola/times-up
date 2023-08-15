export type GameContextStateModel = {
  words: string[];
  teamsWords: [string[], string[]];
  teamsScores: [number, number];
  currentWordIndex: number;
  currentTeamIndex: number;
  phase: number;
  time: number;
  roundIsRunning: boolean;
  phaseIsRunning: boolean;
};

export type GameContextActionModel = {
  updateWord: () => void;
  updateTimer: () => void;
  nextWord: () => void;
  startRound: () => void;
  startPhase: () => void;
  currentWord: () => string;
};

export type GameContextModel = GameContextStateModel & GameContextActionModel;
