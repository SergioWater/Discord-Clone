import {createSlice } from '@reduxjs/toolkit';



export const appSlice = createSlice({
  name: 'app',
  initialState:{
    app: null,
  },
  reducers: {
    login: (state, action) => {
        state.app += action.payload;
    },
    logout: (state) =>{
        state.app = null;
    }
  },

});

export const {login, logout} = appSlice.actions;


export const selectapp = (state) => state.app.app;


export default appSlice.reducer;
