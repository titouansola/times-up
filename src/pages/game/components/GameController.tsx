import { useGameContext } from '../../../common/hooks/contexts/useGameContext';
import { Round } from './Round';
import { PhaseWaitingRoom } from './PhaseWaitingRoom';

export function GameController() {
  const gameContext = useGameContext();
  if (gameContext.phaseIsRunning) {
    return <Round />;
  }
  return <PhaseWaitingRoom />;
}
