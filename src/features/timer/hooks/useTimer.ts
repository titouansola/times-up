import { useEffect } from 'react';
import { SECOND } from '../../../data/constants/time.constants';
import { useCoreContext } from '../../core/hooks/useCoreContext';
import { ActionEnum } from '../../../data/enum/action.enum';

export function useTimer() {
  const [{ timerState }, dispatch] = useCoreContext();
  useEffect(() => {
    if (timerState.running) {
      const t = window.setTimeout(() => {
        if (timerState.value <= 0) {
          dispatch({ type: ActionEnum.APP_END_ROUND });
        } else {
          dispatch({ type: ActionEnum.TIMER_TICK });
        }
      }, SECOND);
      return () => window.clearTimeout(t);
    }
  }, [timerState.running, timerState.value]);
}
