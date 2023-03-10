import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './Pages/Blog/Blog.reduce'

export const store = configureStore({
  reducer: { blog: blogReducer }
})

// lấy RootState và AppDispatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
