import { Page } from '../../layout/Page';
import { FoundWordButton } from '../../features/word-list/components/FoundWordButton/FoundWordButton';
import { CountDown } from '../../features/timer/components/CountDown/CountDown';
import { CurrentWord } from '../../features/word-list/components/CurrentWord/CurrentWord';
import { useTimer } from '../../features/timer/hooks/useTimer';
import { useEndOfWordListDetector } from '../../features/word-list/hooks/useEndOfWordListDetector';

import './Round.css';

export function Round() {
  useTimer();
  useEndOfWordListDetector();
  return (
    <Page>
      <div className="background-fill">
        <div className="background-fill-top"></div>
      </div>
      <div className="grow content-centered">
        <CurrentWord />
      </div>
      <CountDown />
      <FoundWordButton />
    </Page>
  );
}
