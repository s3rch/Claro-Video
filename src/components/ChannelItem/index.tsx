// @own
import './styles.scss';

interface ChannelItemParams {
  channelNumber: string;
  channelImage: string;
}

export const ChannelItem = ({ channelNumber, channelImage }: ChannelItemParams) => {
  return (
    <div className="channel-item">
      <p className="channel-item--text">{channelNumber}</p>
      <img
        className="channel-item--image"
        src={channelImage}
        alt={`Channel ${channelNumber}`}
      />
    </div>
  )
}
