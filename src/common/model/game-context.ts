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
  gameIsOver: boolean;
};

export type GameContextActionModel = {
  addWord: (word: string) => void;
  updateWord: () => void;
  updateTimer: () => void;
  nextWord: () => void;
  startRound: () => void;
  startPhase: () => void;
  restart: () => void;
  // Getters
  currentWord: () => string;
  currentTeam: () => string;
  currentPhaseDescription: () => string;
};

export type GameContextModel = GameContextStateModel & GameContextActionModel;
