import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi } from "../services/api";
const initialState={
    email : '',
    password: '',
    firstName: '',
    lastName: '',
    loading: false,
    response: null
    // token: sessionStorage.get('access_token')|| ''
}
export const loginUser = createAsyncThunk('user', async(body)=>{
    try {
        const response = await AuthApi.post('login',body)
        return response.data
    } catch (error) {
        console.log(error.response.data.message);
    }
    
} );

export const signupUser = createAsyncThunk('user', async(body)=>{
    const response = await AuthApi.post('register',body )
    console.log(response.data.message)
    return response.data
})

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        
        setFirstName: (state, {payload})=>{
            state.firstName = payload
        },
        setLastName: (state,{payload})=>{
            state.lastName = payload
        },
        setEmail:(state, {payload})=>{
            state.email = payload
        },
        setPassword: (state, {payload})=>{
            state.password = payload
        },
        clearToken: (state)=>{
            state.token = '';
            sessionStorage.remove('authToken');

        }
    },
    extraReducers:{
        [loginUser.pending]:(state)=>{
            state.loading = true
        },
        [loginUser.fulfilled]: (state, {payload:message, error, data})=>{
            state.loading = false;
            state.error = error;
            state.message = message
            state.response = data; 
        },
        [loginUser.rejected]: (state)=>{
            state.loading = false;
            state.error= ''
        },

    }
})




export default authSlice.reducer
export const {setEmail, setPassword,setFirstName, setLastName} = authSlice.actions