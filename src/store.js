import { configureStore } from '@reduxjs/toolkit'
import reduxSlice from './components/reduxSlice'

export default configureStore({
  reducer: {
    counter:reduxSlice
  },
})