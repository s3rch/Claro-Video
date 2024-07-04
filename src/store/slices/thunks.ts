import { apiInstanceData } from "../../api/cvApi";
import { setChannels, setChannelsError, startLoadingChannels } from "./channelsSlice";

interface GetChannelsParams {
  device_id: string;
  device_category: string;
  device_model: string;
  device_type: string;
  device_so: string;
  format: string;
  device_manufacturer: string;
  authpn: string;
  authpt: string;
  api_version: string;
  region: string;
  HKS: string;
  user_id: number;
  date_from: number;
  date_to: number;
  quantity: number;
}

export const getChannels = (params: GetChannelsParams) => {
  return async (dispatch: Function) => {
    dispatch(startLoadingChannels());

    try {
      const { data } = await apiInstanceData.get('/services/epg/channel', { params });

      dispatch(setChannels({
        response: data.response,
      }));

    } catch (error) {
      dispatch(setChannelsError({ error }));
    }
  }
}
