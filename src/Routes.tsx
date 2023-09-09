import { useCustomRouter } from './hooks/useCustomRouter';
import { Route } from 'react-router-dom';
import { PageEnum } from './data/enum/page.enum';
import { Setup } from './pages/setup/Setup';
import { PhaseIntro } from './pages/phase-intro/PhaseIntro';
import { RoundIntro } from './pages/round-intro/RoundIntro';
import { Round } from './pages/round/Round';
import { RoundOutro } from './pages/round-outro/RoundOutro';
import { GameOver } from './pages/game-over/GameOver';

export function Routes() {
  useCustomRouter();
  return (
    <>
      <Route exact path={PageEnum.SETUP}>
        <Setup />
      </Route>
      <Route exact path={PageEnum.PHASE_INTRO}>
        <PhaseIntro />
      </Route>
      <Route exact path={PageEnum.ROUND_INTRO}>
        <RoundIntro />
      </Route>
      <Route exact path={PageEnum.ROUND}>
        <Round />
      </Route>
      <Route exact path={PageEnum.ROUND_OUTRO}>
        <RoundOutro />
      </Route>
      <Route exact path={PageEnum.GAME_OVER}>
        <GameOver />
      </Route>
    </>
  );
}
