import { configureStore } from '@reduxjs/toolkit'
import spritReducer from '../sprit/spritSlice'

export const store = configureStore({
  reducer: {
        sprite: spritReducer
  },
})