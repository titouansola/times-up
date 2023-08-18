import { TIMER } from '../../../common/constants/timer';
import { IonButton } from '@ionic/react';
import { useGameContext } from '../../../common/hooks/contexts/useGameContext';

export function RunningRound() {
  const gameContext = useGameContext();
  return (
    <>
      <div className="grow">
        <p className="current-word">{gameContext.currentWord()}</p>
      </div>
      <p className="timer">{TIMER - gameContext.time}</p>
      <IonButton expand={'block'} mode={'ios'} onClick={gameContext.nextWord}>
        Next
      </IonButton>
    </>
  );
}
