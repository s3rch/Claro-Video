// @packages
import moment from 'moment';

// @app
import { DurationProgram, durationProgram } from '../../config';

// @own
import './styles.scss';

interface ProgramItemParams {
  onSelectProgram: Function;
  programBegin: string;
  programDescription: string;
  programDuration: string,
  programEnd: string;
  programName: string;
}

const findValue = (key: string) => {
  const found = Object.entries(durationProgram).find(([k, v]) => k === key);
  return found ? found[1] : 'with-000';
}

export const ProgramItem = ({
  onSelectProgram,
  programBegin,
  programDescription,
  programDuration,
  programEnd,
  programName,
}: ProgramItemParams) => {
  const hourBegin = moment(programBegin).format('HH:mm');
  const hourEnd = moment(programEnd).format('HH:mm');

  const handleSelectProgram = () => {
    onSelectProgram({
      programBegin: hourBegin,
      programDescription,
      programEnd: hourEnd,
      programName,
      programDuration,
    });
  };

  const currentDuration = findValue(programDuration);

  return (
    <div
      className={`program-item ${currentDuration}`}
      tabIndex={0}
      onMouseEnter={handleSelectProgram}
    >
      <div>
        {programName}
      </div>

      <div>
        {hourBegin} - {hourEnd}
      </div>
    </div>
  )
}
