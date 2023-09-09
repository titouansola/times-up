import { useCoreContext } from '../../../core/hooks/useCoreContext';

import './CountDown.css';

export function CountDown() {
  const [{ timerState }] = useCoreContext();
  return <p className="timer">{timerState.value}</p>;
}
