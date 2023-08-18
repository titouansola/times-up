import { useGameContext } from '../hooks/contexts/useGameContext';

export function Score() {
  const gameContext = useGameContext();
  return (
    <p className="score">
      Red {gameContext.teamsScores[0]} - {gameContext.teamsScores[1]} Blue
    </p>
  );
}
