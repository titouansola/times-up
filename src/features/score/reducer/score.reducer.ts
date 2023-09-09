import { ActionModel } from '../../../data/model/action.model';
import { TeamEnum } from '../../../data/enum/team.enum';
import { ActionEnum } from '../../../data/enum/action.enum';

export function scoreReducer(
  state: ScoreState,
  action: ActionModel
): ScoreState {
  switch (action.type) {
    case ActionEnum.SCORE_ADD:
      return { ...state, [action.team]: state[action.team] + action.count };

    case ActionEnum.APP_RESET_GAME:
      return { ...initialScoreState };

    default:
      return state;
  }
}

export const initialScoreState = {
  [TeamEnum.RED]: 0,
  [TeamEnum.BLUE]: 0,
};

export type ScoreState = typeof initialScoreState;
