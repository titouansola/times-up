import { IonInput } from '@ionic/react';
import { useEffect, useState } from 'react';
import { useCoreContext } from '../../../core/hooks/useCoreContext';
import { ActionEnum } from '../../../../data/enum/action.enum';

export function AddWordInput() {
  const [word, setWord] = useState('');
  const [{ wordListState }, dispatch] = useCoreContext();

  useEffect(() => {
    if (word.length > 0) {
      setWord('');
    }
  }, [wordListState.words.length]);

  return (
    <IonInput
      autocorrect="on"
      enterkeyhint="next"
      inputmode="text"
      spellcheck={true}
      label="Enter a word"
      aria-label="Enter a word"
      placeholder="Banana"
      labelPlacement="floating"
      className="custom"
      value={word}
      onIonChange={() => dispatch({ type: ActionEnum.WORDLIST_APPEND, word })}
      onIonInput={e => setWord(e.target.value as string)}
    />
  );
}
