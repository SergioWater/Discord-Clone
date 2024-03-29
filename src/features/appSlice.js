import {createSlice } from '@reduxjs/toolkit';



export const appSlice = createSlice({
  name: 'app',
  initialState:{
    channelId: null,
    channelName: null,
  },
  reducers: {
    setchannelId: (state, action) => {
        state.app += action.payload;
    },
  },

});

export const {setchannelId} = appSlice.actions;


export const selectchannelId = (state) => state.app.channelId;
export const selectchannelName = (state) => state.app.channelName;


export default appSlice.reducer;
