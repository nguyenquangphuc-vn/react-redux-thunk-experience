import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counter'
import { rootReducer } from './rootReducer'

const store = configureStore({
  // reducer: rootReducer.reducer, 
  reducer: counterSlice,
})

export default store