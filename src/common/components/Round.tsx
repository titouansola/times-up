import { TIMER } from '../constants/timer';
import { useGameContext } from '../hooks/contexts/useGameContext';

export function Round() {
  const gameContext = useGameContext();

  const currentTeam = gameContext.currentTeamIndex === 0 ? 'red' : 'blue';

  return gameContext.roundIsRunning ? (
    <>
      <p>{TIMER - gameContext.time}</p>
      <p>Team {currentTeam}</p>
      <p>{gameContext.currentWord()}</p>
      <button onClick={gameContext.nextWord}>Next</button>
    </>
  ) : (
    <button onClick={gameContext.startRound}>Start ({currentTeam})</button>
  );
}
