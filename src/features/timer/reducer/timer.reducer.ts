import { MAX_ROUND_TIME } from '../../../data/constants/time.constants';
import { ActionModel } from '../../../data/model/action.model';
import { ActionEnum } from '../../../data/enum/action.enum';

export function timerReducer(
  state: TimerState,
  action: ActionModel
): TimerState {
  switch (action.type) {
    case ActionEnum.APP_START_ROUND:
    case ActionEnum.TIMER_START:
      return { ...state, running: true };

    case ActionEnum.TIMER_STOP:
      return { ...state, running: false };

    case ActionEnum.TIMER_TICK:
      return { ...state, value: state.value - 1 };

    case ActionEnum.APP_END_ROUND:
    case ActionEnum.APP_RESET_GAME:
      return { ...initialTimerState };

    default:
      return state;
  }
}

export const initialTimerState = {
  running: false,
  value: MAX_ROUND_TIME,
};

export type TimerState = typeof initialTimerState;
