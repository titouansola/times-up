import { ThemeEnum } from '../../../data/enum/theme.enum';
import { ActionModel } from '../../../data/model/action.model';
import { PageEnum } from '../../../data/enum/page.enum';
import { ActionEnum } from '../../../data/enum/action.enum';

export function appReducer(state: AppState, action: ActionModel): AppState {
  switch (action.type) {
    case ActionEnum.THEME_UPDATE:
      return { ...state, theme: action.value };

    case ActionEnum.APP_START_GAME:
    case ActionEnum.APP_END_PHASE:
      return { ...state, page: PageEnum.PHASE_INTRO };

    case ActionEnum.APP_START_PHASE:
    case ActionEnum.APP_CONFIRM_ROUND:
      return { ...state, page: PageEnum.ROUND_INTRO };

    case ActionEnum.APP_START_ROUND:
      return { ...state, page: PageEnum.ROUND };

    case ActionEnum.APP_END_ROUND:
      return { ...state, page: PageEnum.ROUND_OUTRO };

    case ActionEnum.APP_END_GAME:
      return { ...state, page: PageEnum.GAME_OVER };

    case ActionEnum.APP_RESET_GAME:
      return { ...state, page: PageEnum.SETUP };

    default:
      return state;
  }
}

export const initialAppState = {
  page: PageEnum.SETUP,
  theme: ThemeEnum.NEUTRAL,
};

export type AppState = typeof initialAppState;
