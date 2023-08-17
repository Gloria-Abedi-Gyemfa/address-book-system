import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi } from "../services/api";
import { toast } from "react-toastify";

const initialState={
    email : '',
    password: '',
    loading: false
}
export const loginUser = createAsyncThunk('user', async(body)=>{
    try {
        const response = await AuthApi.post('login',{body})
    console.log(response.data.message)
    return response.data
    } catch (error) {
        console.log(error.response.data.message);
        toast.error(error.response.data.message)
    }
    
} );

export const signupUser = createAsyncThunk('user', async(body)=>{
    const response = await AuthApi.post('register',{body} )
    console.log(response.data.message)
    return response.data
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setEmail:(state, {payload})=>{
            state.email = payload
        },
        setPassword: (state, {payload})=>{
            state.password = payload
        }
    },
    extraReducers:{
        [loginUser.pending]:(state)=>{
            state.loading = true
        },
        [loginUser.fulfilled]: (state, {payload:message,access_token, error})=>{
            state.loading = false;
            state.error = error;
            state.message = message
        },
        [loginUser.rejected]: (state)=>{
            state.loading = false;
            state.error= ''
        },

    }
})




export default authSlice.reducer
export const {setEmail, setPassword} = authSlice.actions