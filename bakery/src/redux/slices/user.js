import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName:'',
    token:'',
    id:''
  },
  reducers: {
    updateUser: (state,action) => {
      state.userName = action.payload.userName
      state.token = action.payload.token
      state.id = action.payload.id
    },
  }
})

export const { updateUser } = userSlice.actions
export default userSlice.reducer;