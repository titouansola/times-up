import { TIMER } from '../constants/timer';
import { useGameContext } from '../hooks/contexts/useGameContext';
import { IonButton } from '@ionic/react';

export function Round() {
  const gameContext = useGameContext();

  const currentTeam = gameContext.currentTeamIndex === 0 ? 'red' : 'blue';

  return gameContext.roundIsRunning ? (
    <>
      <p>{TIMER - gameContext.time}</p>
      <p>Team {currentTeam}</p>
      <p>{gameContext.currentWord()}</p>
      <IonButton expand={'block'} mode={'ios'} onClick={gameContext.nextWord}>
        Next
      </IonButton>
    </>
  ) : (
    <IonButton expand={'block'} mode={'ios'} onClick={gameContext.startRound}>
      Start ({currentTeam})
    </IonButton>
  );
}
