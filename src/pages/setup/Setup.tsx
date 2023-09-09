import { ConfirmStartGameModal } from '../../features/word-list/components/ConfirmStartGameModal/ConfirmStartGameModal';
import { AddWordInput } from '../../features/word-list/components/AddWordInput/AddWordInput';
import { WordCount } from '../../features/word-list/components/WordCount/WordCount';
import { StartGameButton } from '../../features/word-list/components/StartGameButton/StartGameButton';
import { Page } from '../../layout/Page';

import { version } from '../../../package.json';

import './Setup.css';

export function Setup() {
  return (
    <Page>
      <>
        <div className="grow">
          <h1>
            Time&apos;s Up!
            <p className="version">{version}</p>
          </h1>
          <p>Choose your words secretly, then pass to another player!</p>
          <AddWordInput />
        </div>
        <WordCount />
        <StartGameButton />
        <ConfirmStartGameModal />
      </>
    </Page>
  );
}
