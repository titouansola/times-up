import { IonContent, IonPage } from '@ionic/react';
import { GameController } from './components/GameController';
import { useGameContext } from '../../common/hooks/contexts/useGameContext';
import { Redirect } from 'react-router';

export function GamePage() {
  const gameContext = useGameContext();

  if (gameContext.gameIsOver) {
    return <Redirect to={'/end'} />;
  }

  if (gameContext.words.length === 0) {
    return <Redirect to={'/setup'} />;
  }

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="content">
          <GameController />
        </div>
      </IonContent>
    </IonPage>
  );
}
