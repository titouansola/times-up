import { transfer } from '../../../../utils/transfer';
import { WordListState } from '../word-list.reducer';

export function handleWordFound(
  word: string,
  state: WordListState
): WordListState {
  const index = state.words.indexOf(word);
  if (index >= 0) {
    const [words, tempFoundWords] = transfer(
      index,
      state.words,
      state.tempFoundWords
    );
    return { ...state, words, tempFoundWords };
  }
  return state;
}
