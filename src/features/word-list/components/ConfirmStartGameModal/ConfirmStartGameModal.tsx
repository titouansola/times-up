import { IonButton, IonModal } from '@ionic/react';
import { OverlayEventDetail } from '@ionic/core/components';
import { useRef } from 'react';
import { useCoreContext } from '../../../core/hooks/useCoreContext';
import { ActionEnum } from '../../../../data/enum/action.enum';

import './ConfirmStartGameModal.css';

export function ConfirmStartGameModal() {
  const [{ wordListState }, dispatch] = useCoreContext();
  // eslint-disable-next-line no-undef
  const modal = useRef<HTMLIonModalElement>(null);

  const confirm = () => modal.current?.dismiss(null, 'confirm');
  const cancel = () => modal.current?.dismiss();

  const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
    if (ev.detail.role === 'confirm') {
      dispatch({ type: ActionEnum.APP_START_GAME });
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
        <p id="word-count">{wordListState.words.length} words</p>
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
