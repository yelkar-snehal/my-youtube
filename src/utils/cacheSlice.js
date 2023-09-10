import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cache",
  initialState: {
    search: {},
  },
  reducers: {
    set: (state, action) => {
      // state = Object.assign(state, action.payload);

      state.search = {
        ...state.search,
        ...action.payload,
      };

      console.log(state);
    },
  },
});

export const { set } = cacheSlice.actions;

export default cacheSlice.reducer;
