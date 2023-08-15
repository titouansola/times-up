import { GameContextStateModel } from '../model/game-context';
import { initialState, MAX_PHASE, MAX_TEAM } from '../constants/game';
import { TIMER } from '../constants/timer';

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
  };
}

export function endPhase(
  currentState: GameContextStateModel
): GameContextStateModel {
  const phase = currentState.phase + 1;

  if (phase === MAX_PHASE) {
    return endGame(currentState);
  } else {
    return switchTeam({
      ...currentState,
      words: [...initialState.words],
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
  return { ...currentState, phaseIsRunning: true };
}

export function currentWord(currentState: GameContextStateModel) {
  return currentState.words[currentState.currentWordIndex];
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
