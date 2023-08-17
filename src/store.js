import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/authSlice";
const store = configureStore({
    reducer:{
        user: loginReducer
    }
})
export default store