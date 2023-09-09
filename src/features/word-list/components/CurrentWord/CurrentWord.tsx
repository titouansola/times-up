import { useCoreContext } from '../../../core/hooks/useCoreContext';

import './CurrentWord.css';

export function CurrentWord() {
  const [{ wordListState }] = useCoreContext();
  return <p className="current-word">{wordListState.words[0]}</p>;
}
