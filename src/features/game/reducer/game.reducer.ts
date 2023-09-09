import { PhaseEnum } from '../../../data/enum/phase.enum';
import { ActionModel } from '../../../data/model/action.model';
import { TeamEnum } from '../../../data/enum/team.enum';
import { ActionEnum } from '../../../data/enum/action.enum';
import { switchTeam } from '../utils/switchTeam';
import { goToNextPhase } from '../utils/goToNextPhase';

export function gameReducer(state: GameState, action: ActionModel): GameState {
  switch (action.type) {
    case ActionEnum.APP_CONFIRM_ROUND:
      return { ...state, currentTeam: switchTeam(state.currentTeam) };

    case ActionEnum.APP_END_PHASE:
      return {
        ...state,
        currentTeam: switchTeam(state.currentTeam),
        currentPhase: goToNextPhase(state.currentPhase),
      };

    case ActionEnum.APP_RESET_GAME:
      return { ...initialGameState };

    default:
      return state;
  }
}

export const initialGameState = {
  currentPhase: PhaseEnum.ONE,
  currentTeam: TeamEnum.RED,
};

export type GameState = typeof initialGameState;
