import { useState } from 'react';
import { IonButton, IonContent, IonInput, IonPage } from '@ionic/react';
import { useGameContext } from '../../common/hooks/contexts/useGameContext';
import { MIN_WORD_NUMBER } from '../../common/constants/game';
import { ConfirmModal } from './components/ConfirmModal';
import { version } from '../../../package.json';

import './SetupPage.css';

export function SetupPage() {
  const [word, setWord] = useState('');
  const gameContext = useGameContext();

  const onSubmit = () => {
    const newWord = word.trim();
    if (newWord.length > 0) {
      gameContext.addWord(word);
      setWord('');
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="content">
          <div className="grow">
            <h1>
              Time&apos;s Up!
              <p className="version">{version}</p>
            </h1>
            <p>Choose your words secretly, then pass to another player!</p>
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
              onIonChange={onSubmit}
              onIonInput={e => setWord(e.target.value as string)}
            />
          </div>
          <p>Total : {gameContext.words.length}</p>
          <IonButton
            id="confirm-btn"
            expand="block"
            disabled={gameContext.words.length < MIN_WORD_NUMBER}
          >
            Let&apos;s go!
          </IonButton>
        </div>
        <ConfirmModal />
      </IonContent>
    </IonPage>
  );
}
