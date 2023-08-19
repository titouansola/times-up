import { useGameContext } from '../../common/hooks/contexts/useGameContext';
import { IonButton, IonContent, IonPage } from '@ionic/react';
import { Redirect } from 'react-router';
import { Score } from '../../common/components/Score/Score';

export function GameOverPage() {
  const gameContext = useGameContext();

  if (!gameContext.gameIsOver) {
    return <Redirect to={'/setup'} />;
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="content">
          <div className="grow content-centered">
            <h3>Game Over!</h3>
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
