import { createSlice } from '@reduxjs/toolkit'

initialState = {
  alert: '',
  isLoading: false,
  isPending: false,
  isFulfilled: false,
}

export const formSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    addLoader: (state, actions) => {
      state.isLoading = true
      state.isPending = true
      state.alert = 'Hello'
    },
    removeLoader: state,
  },
})
