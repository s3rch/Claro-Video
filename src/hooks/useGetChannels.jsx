// @packages
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @app
import { getChannels } from '../store/slices';

const useGetChannels = (configGetChannels) => {
  const dispatch = useDispatch();
  const { channels, isLoading, error } = useSelector((state) => state.channels);

  useEffect(() => {
    if (channels.length === 0) {
      dispatch(getChannels(configGetChannels));
    }
  }, []);

  return { channels, isLoading, error };
};

export default useGetChannels;
