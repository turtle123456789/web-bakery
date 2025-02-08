import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    quantity: 0
  },
  reducers: {
    updateQuantity: (state,action) => {

      state.quantity = action.payload
    },
    increase: (state) => {
      state.quantity +=1
    },
    decrease: (state) => {
      state.quantity -= 1
    }
  }
})

export const { updateQuantity,increase,decrease } = cartSlice.actions
export default cartSlice.reducer;