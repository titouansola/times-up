import { IonButton } from '@ionic/react';
import { Page } from '../../layout/Page';
import { useCoreContext } from '../../features/core/hooks/useCoreContext';
import { useTeamDetector } from '../../features/game/hooks/useTeamDetector';
import { capitalize } from '../../utils/capitalize';
import { ActionEnum } from '../../data/enum/action.enum';

import './RoundIntro.css';

export function RoundIntro() {
  const [{ gameState }, dispatch] = useCoreContext();
  useTeamDetector();
  return (
    <Page>
      <>
        <div className="grow content-centered">
          <p className="team-turn">
            {capitalize(gameState.currentTeam)} team,
            <br />
            it&apos;s your turn!
          </p>
        </div>
        <IonButton
          expand={'block'}
          mode={'ios'}
          onClick={() => dispatch({ type: ActionEnum.APP_START_ROUND })}
        >
          Here we go!
        </IonButton>
      </>
    </Page>
  );
}
