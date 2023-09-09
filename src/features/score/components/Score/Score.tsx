import { useCoreContext } from '../../../core/hooks/useCoreContext';
import { capitalize } from '../../../../utils/capitalize';

import './Score.css';

export function Score() {
  const [{ scoreState }] = useCoreContext();
  return (
    <div className="score">
      {Object.entries(scoreState).map(([team, score]) => (
        <p key={team}>
          {capitalize(team)} : {score}
        </p>
      ))}
    </div>
  );
}
