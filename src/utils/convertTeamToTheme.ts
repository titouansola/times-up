import { TeamEnum } from '../data/enum/team.enum';
import { ThemeEnum } from '../data/enum/theme.enum';

export function convertTeamToTheme(team: TeamEnum) {
  switch (team) {
    case TeamEnum.BLUE:
      return ThemeEnum.BLUE;
    case TeamEnum.RED:
      return ThemeEnum.RED;
    default:
      return ThemeEnum.NEUTRAL;
  }
}
