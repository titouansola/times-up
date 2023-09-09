import { useCoreContext } from '../../core/hooks/useCoreContext';
import { useEffect } from 'react';
import { ActionEnum } from '../../../data/enum/action.enum';

export function useEndOfWordListDetector() {
  const [{ wordListState }, dispatch] = useCoreContext();

  useEffect(() => {
    if (wordListState.words.length === 0) {
      dispatch({ type: ActionEnum.APP_END_ROUND });
    }
  }, [wordListState.words.length]);
}
