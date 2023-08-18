import { GameContextStateModel } from '../model/game-context';
import {
  initialState,
  MAX_PHASE,
  MAX_TEAM,
  PHASE_ONE,
  PHASE_THREE,
  PHASE_TWO,
} from '../constants/game';
import { TIMER } from '../constants/timer';

export function addWord(word: string) {
  return (currentState: GameContextStateModel): GameContextStateModel => ({
    ...currentState,
    words: [...currentState.words, word],
  });
}

export function updateWord(
  currentState: GameContextStateModel
): GameContextStateModel {
  if (currentState.words.length === 0) {
    return endPhase(currentState);
  } else {
    return {
      ...currentState,
      currentWordIndex: Math.floor(Math.random() * currentState.words.length),
    };
  }
}

export function endGame(
  currentState: GameContextStateModel
): GameContextStateModel {
  return {
    ...initialState,
    teamsScores: currentState.teamsScores,
    gameIsOver: true,
  };
}

export function endPhase(
  currentState: GameContextStateModel
): GameContextStateModel {
  const phase = currentState.phase + 1;

  if (phase === MAX_PHASE) {
    return endGame(currentState);
  } else {
    const [w1, w2] = currentState.teamsWords;
    return switchTeam({
      ...currentState,
      words: [...w1, ...w2],
      teamsWords: [[], []],
      phaseIsRunning: false,
      phase,
    });
  }
}

export function updateTimer(
  currentState: GameContextStateModel
): GameContextStateModel {
  const time = (currentState.time + 1) % TIMER;
  return time === 0 ? switchTeam(currentState) : { ...currentState, time };
}

export function nextWord(
  currentState: GameContextStateModel
): GameContextStateModel {
  const words = [...currentState.words];
  const teamsWords = [
    [...currentState.teamsWords[0]],
    [...currentState.teamsWords[1]],
  ] as [string[], string[]];
  const teamsScores = [...currentState.teamsScores] as [number, number];
  //
  teamsWords[currentState.currentTeamIndex].push(
    words.splice(currentState.currentWordIndex, 1)[0]
  );
  teamsScores[currentState.currentTeamIndex] += 1;
  //
  return updateWord({ ...currentState, words, teamsWords, teamsScores });
}

export function startRound(
  currentState: GameContextStateModel
): GameContextStateModel {
  return { ...currentState, roundIsRunning: true };
}

export function startPhase(
  currentState: GameContextStateModel
): GameContextStateModel {
  return updateWord({ ...currentState, phaseIsRunning: true });
}

export function currentWord(currentState: GameContextStateModel) {
  return currentState.words[currentState.currentWordIndex];
}

export function currentTeam(currentState: GameContextStateModel) {
  return currentState.currentTeamIndex === 0 ? 'Red' : 'Blue';
}

export function currentPhaseDescription(currentState: GameContextStateModel) {
  switch (currentState.phase) {
    case PHASE_ONE:
      return 'Use sentences to help guessing the word. No gestures allowed!';
    case PHASE_TWO:
      return 'Use only one word. Again, no gestures allowed!';
    case PHASE_THREE:
      return 'Use only mimes. No sound allowed!';
    default:
      return '';
  }
}

export function switchTeam(
  currentState: GameContextStateModel
): GameContextStateModel {
  let { currentTeamIndex } = currentState;
  currentTeamIndex = (currentTeamIndex + 1) % MAX_TEAM;
  return {
    ...currentState,
    time: 0,
    currentTeamIndex,
    roundIsRunning: false,
  };
}
