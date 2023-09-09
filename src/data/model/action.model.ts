import { ThemeEnum } from '../enum/theme.enum';
import { TeamEnum } from '../enum/team.enum';
import { ActionEnum } from '../enum/action.enum';

export type ActionModel =
  | { type: ActionEnum.THEME_UPDATE; value: ThemeEnum }
  //
  | { type: ActionEnum.WORDLIST_APPEND; word: string }
  //
  | { type: ActionEnum.WORDLIST_FOUND_WORD; word: string }
  | { type: ActionEnum.WORDLIST_CANCEL_WORD; word: string }
  | { type: ActionEnum.WORDLIST_CONFIRM_WORDS }
  //
  | { type: ActionEnum.SCORE_ADD; team: TeamEnum; count: number }
  //
  | { type: ActionEnum.TIMER_START }
  | { type: ActionEnum.TIMER_TICK }
  | { type: ActionEnum.TIMER_STOP }
  //
  | { type: ActionEnum.APP_START_GAME }
  | { type: ActionEnum.APP_END_GAME }
  | { type: ActionEnum.APP_RESET_GAME }
  | { type: ActionEnum.APP_START_PHASE }
  | { type: ActionEnum.APP_END_PHASE }
  | { type: ActionEnum.APP_START_ROUND }
  | { type: ActionEnum.APP_END_ROUND }
  | { type: ActionEnum.APP_CONFIRM_ROUND };
