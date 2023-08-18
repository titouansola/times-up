import { useGameContext } from '../../common/hooks/contexts/useGameContext';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import { Redirect } from 'react-router';
import { Score } from '../../common/components/Score';

export function GameOverPage() {
  const gameContext = useGameContext();

  if (!gameContext.gameIsOver) {
    return <Redirect to={'/setup'} />;
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="content">
          <div className="grow">
            <p>Game Over</p>
            <Score />
          </div>
          <IonButton expand={'block'} onClick={gameContext.restart}>
            Restart
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}
