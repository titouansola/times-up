import { useCoreContext } from '../../../core/hooks/useCoreContext';

export function WordCount() {
  const [{ wordListState }] = useCoreContext();

  return <p>Total : {wordListState.words.length}</p>;
}
