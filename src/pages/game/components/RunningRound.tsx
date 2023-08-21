import { useState } from 'react';
import { IonButton } from '@ionic/react';
import { SECOND, TIMER } from '../../../common/constants/timer';
import { useGameContext } from '../../../common/hooks/contexts/useGameContext';

import './RunningRound.css';

export function RunningRound() {
  const gameContext = useGameContext();
  const [hold, setHold] = useState(false);

  const onFoundWord = () => {
    gameContext.nextWord();
    setHold(true);
    const t = setTimeout(() => {
      setHold(false);
      clearTimeout(t);
    }, SECOND);
  };

  return (
    <>
      <div className="background-fill">
        <div className="background-fill-top"></div>
      </div>
      <div className="grow content-centered">
        <p className="current-word">{gameContext.currentWord()}</p>
      </div>
      <p className="timer">{TIMER - gameContext.time}</p>
      <IonButton
        expand={'block'}
        mode={'ios'}
        disabled={hold}
        onClick={onFoundWord}
      >
        Found it!
      </IonButton>
    </>
  );
}
