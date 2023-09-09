import { useState } from 'react';
import { IonButton } from '@ionic/react';
import { SECOND } from '../../../../data/constants/time.constants';
import { useCoreContext } from '../../../core/hooks/useCoreContext';
import { ActionEnum } from '../../../../data/enum/action.enum';

export function FoundWordButton() {
  const [{ wordListState }, dispatch] = useCoreContext();
  const [hold, setHold] = useState(false);

  const onFoundWord = () => {
    dispatch({
      type: ActionEnum.WORDLIST_FOUND_WORD,
      word: wordListState.words[0],
    });
    setHold(true);
    const t = setTimeout(() => {
      setHold(false);
      clearTimeout(t);
    }, SECOND);
  };

  return (
    <IonButton
      expand={'block'}
      mode={'ios'}
      disabled={hold}
      onClick={onFoundWord}
    >
      Found it!
    </IonButton>
  );
}
