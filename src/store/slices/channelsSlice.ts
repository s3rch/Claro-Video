import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  error: null,
  isLoading: false,
  channels: [],
}

export const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    startLoadingChannels: (state) => {
      state.isLoading = true;
    },
    setChannels: (state, { payload }) => {
      state.isLoading = false;
      state.channels = payload.response.channels;
    },
    setChannelsError: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload.error;
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingChannels, setChannels, setChannelsError } = channelsSlice.actions;
