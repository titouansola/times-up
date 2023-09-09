import { transfer } from '../../../../utils/transfer';
import { WordListState } from '../word-list.reducer';

export function cancelWord(word: string, state: WordListState): WordListState {
  const index = state.tempFoundWords.indexOf(word);
  if (index >= 0) {
    const [tempFoundWords, words] = transfer(
      index,
      state.tempFoundWords,
      state.words
    );
    return { ...state, words, tempFoundWords };
  }
  return state;
}
