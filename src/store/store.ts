// @packages
import { configureStore } from '@reduxjs/toolkit'
import { channelsSlice } from './slices'

// @app

export const store = configureStore({
  reducer: {
    channels: channelsSlice.reducer,
  },
})
