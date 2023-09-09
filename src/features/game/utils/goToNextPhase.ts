import { PhaseEnum } from '../../../data/enum/phase.enum';

export function goToNextPhase(current: PhaseEnum) {
  const values = Object.values(PhaseEnum);
  const newIndex = (values.findIndex(v => v === current) + 1) % values.length;
  return values[newIndex] as PhaseEnum;
}
