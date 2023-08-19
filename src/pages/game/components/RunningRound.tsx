import { IonButton } from '@ionic/react';
import { TIMER } from '../../../common/constants/timer';
import { useGameContext } from '../../../common/hooks/contexts/useGameContext';

import './RunningRound.css';

export function RunningRound() {
  const gameContext = useGameContext();
  return (
    <>
      <div className="background-fill">
        <div className="background-fill-top"></div>
      </div>
      <div className="grow content-centered">
        <p className="current-word">{gameContext.currentWord()}</p>
      </div>
      <p className="timer">{TIMER - gameContext.time}</p>
      <IonButton expand={'block'} mode={'ios'} onClick={gameContext.nextWord}>
        Next
      </IonButton>
    </>
  );
}
