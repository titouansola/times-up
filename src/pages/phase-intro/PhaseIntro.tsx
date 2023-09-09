import { IonButton } from '@ionic/react';
import { Page } from '../../layout/Page';
import { Score } from '../../features/score/components/Score/Score';
import { useCoreContext } from '../../features/core/hooks/useCoreContext';
import { getPhaseDescription } from '../../utils/getPhaseDescription';
import { ActionEnum } from '../../data/enum/action.enum';

export function PhaseIntro() {
  const [{ gameState }, dispatch] = useCoreContext();
  const onStart = () => dispatch({ type: ActionEnum.APP_START_PHASE });
  return (
    <Page>
      <div className="grow">
        <h3>Phase {gameState.currentPhase}</h3>
        <p>{getPhaseDescription(gameState.currentPhase)}</p>
        <Score />
        <IonButton expand={'block'} mode={'ios'} onClick={onStart}>
          Start
        </IonButton>
      </div>
    </Page>
  );
}
