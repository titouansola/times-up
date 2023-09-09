import { append } from '../../../../utils/append';
import { WordListState } from '../word-list.reducer';

export function appendWord(_word: string, state: WordListState): WordListState {
  const word = _word?.trim();
  if (!(word?.length > 0)) {
    return state;
  }
  return {
    ...state,
    words: append(word, state.words),
  };
}
