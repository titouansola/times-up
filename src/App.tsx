import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { GamePage } from './pages/game/GamePage';
import { Redirect } from 'react-router';
import { SetupPage } from './pages/setup/SetupPage';
import { GameOverPage } from './pages/end/GameOverPage';
import { useThemeContext } from './common/hooks/contexts/useThemeContext';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './styles/index.css';

setupIonicReact();

export function App() {
  const [theme] = useThemeContext();
  return (
    <IonApp className={theme}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/end">
            <GameOverPage />
          </Route>
          <Route exact path="/game">
            <GamePage />
          </Route>
          <Route exact path="/setup">
            <SetupPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/setup" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
