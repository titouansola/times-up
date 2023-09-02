import { IonButton, IonModal, useIonRouter } from '@ionic/react';
import { useRef } from 'react';
import { OverlayEventDetail } from '@ionic/core/components';
import { useGameContext } from '../../../common/hooks/contexts/useGameContext';

import './ConfirmModal.css';

export function ConfirmModal() {
  const gameContext = useGameContext();
  const router = useIonRouter();
  const modal = useRef<HTMLIonModalElement>(null);

  const confirm = () => modal.current?.dismiss(null, 'confirm');
  const cancel = () => modal.current?.dismiss();

  const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
    if (ev.detail.role === 'confirm') {
      router.push('/game', 'forward', 'replace');
    }
  };

  return (
    <IonModal
      id="confirm-modal"
      trigger="confirm-btn"
      ref={modal}
      onWillDismiss={onWillDismiss}
    >
      <div className="wrapper">
        <h4>Are you ready?</h4>
        <p id="intro">Starting game now with</p>
        <p id="word-count">{gameContext.words.length} words</p>
        <div className="btn-toolbar">
          <IonButton onClick={confirm}>Alright</IonButton>
          <IonButton onClick={cancel} color="danger">
            Not yet
          </IonButton>
        </div>
      </div>
    </IonModal>
  );
}
