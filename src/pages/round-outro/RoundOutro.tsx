import { IonButton } from '@ionic/react';
import { Page } from '../../layout/Page';
import { useRoundConfirmation } from '../../features/core/hooks/useRoundConfirmation';

import './RoundOutro.css';

export function RoundOutro() {
  const { wordListState, onContest, onConfirm } = useRoundConfirmation();
  return (
    <Page>
      <div className={'grow round-outro'}>
        <h3>Confirm Round</h3>
        <p>Select words to contest : F U cheaters!</p>
        <div className="word-list">
          {wordListState.tempFoundWords.map(word => (
            <div key={word} className={'word-to-confirm'}>
              <p>{word}</p>
              <IonButton size="small" onClick={onContest(word)}>
                Contest
              </IonButton>
            </div>
          ))}
        </div>
      </div>
      <IonButton expand="block" onClick={onConfirm}>
        It&apos;s OK!
      </IonButton>
    </Page>
  );
}
