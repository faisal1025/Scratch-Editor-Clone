import { configureStore } from '@reduxjs/toolkit'
import spritReducer from '../sprit/spritSlice'
import categoryReducer from '../category/categorySlice'

export const store = configureStore({
  reducer: {
        sprite: spritReducer,
        category: categoryReducer,
  },
})