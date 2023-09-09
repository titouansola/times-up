import { PhaseEnum } from '../data/enum/phase.enum';

export function getPhaseDescription(phase: PhaseEnum) {
  switch (phase) {
    case PhaseEnum.ONE:
      return 'Use sentences to help guessing the word. No gestures allowed!';
    case PhaseEnum.TWO:
      return 'Use only one word. Again, no gestures allowed!';
    case PhaseEnum.THREE:
      return 'Use only mimes. No sound allowed!';
    default:
      return '';
  }
}
