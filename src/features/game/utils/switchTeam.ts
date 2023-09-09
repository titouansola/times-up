import { TeamEnum } from '../../../data/enum/team.enum';

export function switchTeam(current: TeamEnum) {
  const values = Object.values(TeamEnum);
  const newIndex = (values.findIndex(v => v === current) + 1) % values.length;
  return values[newIndex];
}
