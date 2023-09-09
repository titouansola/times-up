import { useCoreContext } from '../../core/hooks/useCoreContext';
import { useEffect } from 'react';
import { ActionEnum } from '../../../data/enum/action.enum';
import { convertTeamToTheme } from '../../../utils/convertTeamToTheme';

export function useTeamDetector() {
  const [{ gameState }, dispatch] = useCoreContext();
  useEffect(() => {
    dispatch({
      type: ActionEnum.THEME_UPDATE,
      value: convertTeamToTheme(gameState.currentTeam),
    });
  }, [gameState.currentTeam]);
}
