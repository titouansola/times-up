import { IonButton, IonContent, IonPage } from '@ionic/react';
import { useGameContext } from '../../common/hooks/contexts/useGameContext';
import { Round } from '../../common/components/Round';

export function Game() {
  const gameContext = useGameContext();

  return (
    <IonPage>
      <IonContent fullscreen>
        {gameContext.phaseIsRunning ? (
          <Round />
        ) : (
          <IonButton
            expand={'block'}
            mode={'ios'}
            onClick={gameContext.startPhase}
          >
            Start phase {gameContext.phase + 1}
          </IonButton>
        )}
      </IonContent>
    </IonPage>
  );
}
