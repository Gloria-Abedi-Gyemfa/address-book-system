import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthApi, ContactApi } from "../services/api";
const initialState={
    email : '',
    password: '',
    firstName: '',
    lastName: '',
    name:'',
    phone:'',
    address:'',
    loading: false,
    response: null
}
export const loginUser = createAsyncThunk('user', async(body)=>{
    try {
        const response = await AuthApi.post('login',body)
        return response.data
    } catch (error) {
        console.log(error.response.data.message);
        return error.response.data
    }
    
} );

export const signupUser = createAsyncThunk('user', async(body)=>{
    try {
        const response = await AuthApi.post('register',body )
        return response.data
    } catch (error) {
        return error.message
    }
})

export const newUser = createAsyncThunk('user', async(body)=>{
    try {
        const response = await ContactApi('add-contact', body)
        return response.data
    } catch (error) {
        
    }
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
        setName: (state, {payload})=>{
            state.name = payload
        },
        setPhone: (state, {payload})=>{
            state.phone = payload
        },
        setAddress: (state, {payload})=>{
            state.address = payload
        },
        setRespone: (state, {payload})=>{
            state.response = payload
        }
    },
    extraReducers:{
        [loginUser.pending]:(state)=>{
            state.loading = true
        },
        [loginUser.fulfilled]: (state, {payload})=>{
            state.loading = false;
            state.response = payload; 
        },
        [loginUser.rejected]: (state, {payload})=>{
            state.loading = false;
            state.error = payload
        },
        [signupUser.pending]:(state)=>{
            state.loading = true
        },
        [signupUser.fulfilled]: (state, {payload})=>{
            state.loading = false;
            state.response = payload; 
        },
        [signupUser.rejected]: (state, {payload})=>{
            state.loading = false;
            state.error = payload
        },
        [newUser.pending]: (state)=>{
            state.loading = true
        },
        [newUser.fulfilled]: (state, {payload})=>{
            state.loading = false
            state.response = payload
        }, 
        [newUser.rejected]:(state, {payload})=>{
            state.loading = false
            state.error = payload
        }

    }
})




export default authSlice.reducer
export const {setEmail, setPassword,setFirstName, setLastName,setName, setAddress, setPhone, setRespone} = authSlice.actions