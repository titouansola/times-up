import { IonButton, IonContent, IonPage } from '@ionic/react';
import { Score } from '../../features/score/components/Score/Score';
import { useCoreContext } from '../../features/core/hooks/useCoreContext';
import { ActionEnum } from '../../data/enum/action.enum';

export function GameOver() {
  const [, dispatch] = useCoreContext();
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="content">
          <div className="grow content-centered">
            <h3>Game Over!</h3>
            <Score />
          </div>
          <IonButton
            expand={'block'}
            onClick={() => dispatch({ type: ActionEnum.APP_RESET_GAME })}
          >
            Restart
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
}
