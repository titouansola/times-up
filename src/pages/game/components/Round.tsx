import { useGameContext } from '../../../common/hooks/contexts/useGameContext';
import { RunningRound } from './RunningRound';
import { RoundWaitingRoom } from './RoundWaitingRoom';

export function Round() {
  const gameContext = useGameContext();
  return gameContext.roundIsRunning ? <RunningRound /> : <RoundWaitingRoom />;
}
