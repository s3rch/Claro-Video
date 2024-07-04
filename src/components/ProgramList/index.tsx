// @app
import { ProgramItem } from '../ProgramItem';

// @own
import './styles.scss';

interface ProgramListParams {
  channelPrograms: ProgramDetails[];
  onSelectProgram: Function;
}

interface ProgramDetails {
  date_begin: string;
  date_end: string;
  description: string;
  duration: string;
  name: string;
}

export const ProgramList = ({ channelPrograms, onSelectProgram }: ProgramListParams) => {
  return (
    <div className='program-list'>
      {channelPrograms.map((program) => {
        const {
          date_begin,
          date_end,
          description,
          duration,
          name,
        } = program;
        return (
          <ProgramItem
            onSelectProgram={onSelectProgram}
            programBegin={date_begin}
            programDescription={description}
            programDuration={duration}
            programEnd={date_end}
            programName={name}
          />
        );
      })}
    </div>
  )
}
