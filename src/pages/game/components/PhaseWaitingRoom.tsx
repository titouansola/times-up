import { IonButton } from '@ionic/react';
import { useGameContext } from '../../../common/hooks/contexts/useGameContext';
import { Score } from '../../../common/components/Score/Score';

export function PhaseWaitingRoom() {
  const gameContext = useGameContext();
  return (
    <>
      <div className="grow">
        <h3>Phase {gameContext.phase + 1}</h3>
        <p>{gameContext.currentPhaseDescription()}</p>
        <p>{gameContext.words.length} words left to guess</p>
        <Score />
      </div>
      <IonButton expand={'block'} mode={'ios'} onClick={gameContext.startPhase}>
        Start phase
      </IonButton>
    </>
  );
}
