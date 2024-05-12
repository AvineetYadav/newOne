import { createSlice } from "@reduxjs/toolkit";

const userSice = createSlice({
  name: "user",
  initialState: {
    User: null,
  },
  reducers: {
    addUser: (state, action) => {
      state.User = action.payload;
    },
    removeUser: (state, action) => {
      state.User = null;
    },
  },
});

export default userSice.reducer;
export const { addUser, removeUser } = userSice.actions;
