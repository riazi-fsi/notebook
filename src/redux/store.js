import { configureStore } from "@reduxjs/toolkit"
import noteReducer from './notes/noteSlice'
export default configureStore ({
    reducer:noteReducer
})