import { createSlice } from '@reduxjs/toolkit';


export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
  },
});

export const { login, logout } = userSlice.actions; //Access to the action
export default userSlice.reducer;
