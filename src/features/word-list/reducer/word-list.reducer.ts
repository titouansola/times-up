import { ActionModel } from '../../../data/model/action.model';
import { ActionEnum } from '../../../data/enum/action.enum';
import { shuffle } from '../../../utils/shuffle';
import { merge } from '../../../utils/merge';
import { appendWord } from './factory/appendWord';
import { handleWordFound } from './factory/handleWordFound';
import { cancelWord } from './factory/cancelWord';

export function wordListReducer(
  state: WordListState,
  action: ActionModel
): WordListState {
  switch (action.type) {
    case ActionEnum.WORDLIST_APPEND:
      return appendWord(action.word, state);

    case ActionEnum.APP_START_PHASE:
      return { ...state, words: shuffle([...state.words]) };

    case ActionEnum.WORDLIST_FOUND_WORD:
      return handleWordFound(action.word, state);

    case ActionEnum.WORDLIST_CANCEL_WORD:
      return cancelWord(action.word, state);

    case ActionEnum.WORDLIST_CONFIRM_WORDS:
      return {
        ...state,
        foundWords: merge(state.tempFoundWords, state.foundWords),
        tempFoundWords: [],
        words: shuffle([...state.words]),
      };

    case ActionEnum.APP_END_PHASE:
      return { ...state, foundWords: [], words: [...state.foundWords] };

    case ActionEnum.APP_RESET_GAME:
      return { ...initialWordListState };

    default:
      return state;
  }
}

export const initialWordListState = {
  foundWords: [] as string[],
  tempFoundWords: [] as string[],
  words: [] as string[],
};

export type WordListState = typeof initialWordListState;
