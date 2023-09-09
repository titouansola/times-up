import { useCoreContext } from './useCoreContext';
import { ActionEnum } from '../../../data/enum/action.enum';
import { ThemeEnum } from '../../../data/enum/theme.enum';
import { PhaseEnum } from '../../../data/enum/phase.enum';

export function useRoundConfirmation() {
  const [{ wordListState, gameState }, dispatch] = useCoreContext();

  const redirect = () => {
    if (gameState.currentPhase === PhaseEnum.THREE) {
      dispatch({ type: ActionEnum.APP_END_GAME });
      dispatch({ type: ActionEnum.THEME_UPDATE, value: ThemeEnum.NEUTRAL });
      //
    } else if (wordListState.words.length === 0) {
      dispatch({ type: ActionEnum.APP_END_PHASE });
      dispatch({ type: ActionEnum.THEME_UPDATE, value: ThemeEnum.NEUTRAL });
      //
    } else {
      dispatch({ type: ActionEnum.APP_CONFIRM_ROUND });
    }
  };

  const onContest = (word: string) => {
    return () => dispatch({ type: ActionEnum.WORDLIST_CANCEL_WORD, word });
  };

  const onConfirm = () => {
    dispatch({
      type: ActionEnum.SCORE_ADD,
      team: gameState.currentTeam,
      count: wordListState.tempFoundWords.length,
    });
    dispatch({ type: ActionEnum.WORDLIST_CONFIRM_WORDS });
    //
    redirect();
  };

  return { wordListState, onContest, onConfirm };
}
