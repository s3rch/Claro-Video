// @packages
import { useState } from 'react';

// @app
import { ChannelItem, EmptyState, Loading, ProgramList } from '../../components';
import { configGetChannels } from '../../config';
import useGetChannels from '../../hooks/useGetChannels';


// @own
import './styles.scss';

interface ProgramSelectedParams {
  programName?: string;
  programDescription?: string;
  programBegin?: number
  programEnd?: number;
}

export const CVView = () => {
  const [programSelected, setProgramSelected] = useState<ProgramSelectedParams>({})
  const { channels, isLoading, error } = useGetChannels(configGetChannels);

  const handleSelectProgram = (program: object) => {
    setProgramSelected(program)
  };

  if (isLoading) {
    return (<Loading />);
  }

  if (error) {
    return (<EmptyState />)
  }

  if (channels.length) {
    return (
      <div className='cv-view'>
        <div className="cv-view--details">
          {(!!programSelected.programName) && (
            <div className='cv-view--details-title'>
              {programSelected.programName}
            </div>
          )}

          {(!!programSelected.programBegin && programSelected.programEnd) && (
            <div className='cv-view--details-schedule'>
              {programSelected.programBegin} a {programSelected.programEnd}
            </div>
          )}

          {(!!programSelected.programDescription) && (
            <div className='cv-view--details-description'>
              {programSelected.programDescription}
            </div>
          )}
        </div>

        <div className="cv-view--list">
          <div className="cv-view--list-channels">
            <div className="cv-view--list-headers-channel">
              Channel
            </div>

            {channels.map((channel: any) => {
              const { id, number, image } = channel;
              return (
                <ChannelItem
                  channelImage={image}
                  channelNumber={number}
                  key={id}
                />
              )
            })}
          </div>

          <div className="cv-view--list-programs">
            <div className="cv-view--list-headers-program">
              <span>16:00hs</span>
              <span>16:30hs</span>
              <span>17:00hs</span>
              <span>17:30hs</span>
              <span>18:00hs</span>
              <span>18:30hs</span>
              <span>19:00hs</span>
              <span>19:30hs</span>
              <span>20:00hs</span>
              <span>20:30hs</span>
            </div>

            {channels.map((channel: any) => {
              const { id, events } = channel;
              return (
                <ProgramList
                  onSelectProgram={handleSelectProgram}
                  channelPrograms={events}
                  key={id}
                />
              )
            })}
          </div>
        </div>
      </div >
    )
  }
}
