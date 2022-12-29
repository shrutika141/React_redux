import { configureStore } from '@reduxjs/toolkit'

import PostReducer from "./Reducer/PostReducer";

const store = configureStore({
    reducer: PostReducer
})

export default store