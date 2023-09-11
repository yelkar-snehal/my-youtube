import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.unshift(action.payload);
    },
    addMessages: (state, action) => {
      state.messages.unshift(...action.payload);
    },
  },
});

export const { addMessage, addMessages } = chatSlice.actions;

export default chatSlice.reducer;