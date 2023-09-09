import { useEffect } from 'react';
import { useIonRouter } from '@ionic/react';
import { useCoreContext } from '../features/core/hooks/useCoreContext';

export function useCustomRouter() {
  const router = useIonRouter();
  const [{ appState }] = useCoreContext();
  useEffect(() => {
    if (router.routeInfo.pathname !== appState.page) {
      router.push(appState.page, 'forward', 'replace');
    }
  }, [router.routeInfo, appState.page]);
}
