import { useGameContext } from '../../../common/hooks/contexts/useGameContext';
import { IonButton } from '@ionic/react';

export function RoundWaitingRoom() {
  const gameContext = useGameContext();
  return (
    <>
      <div className="grow">
        <p className={'team-turn'}>
          {gameContext.currentTeam()}!<br />
          It&apos;s your turn!
        </p>
      </div>
      <IonButton expand={'block'} mode={'ios'} onClick={gameContext.startRound}>
        Let&apos;s go!
      </IonButton>
    </>
  );
}
