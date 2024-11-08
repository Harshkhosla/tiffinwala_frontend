// src/features/userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// Async thunk for submitting form data
export const submitUserData = createAsyncThunk(
  'user/submitUserData',
  async ({ userData, callApi }, { rejectWithValue }) => {
    try{

      const result = await callApi({
        method: 'POST',
        url: 'http://localhost:5001/api/v1/user/createuser',
        body: userData,
      });
      return result;
    }catch(e){
      return rejectWithValue(error.message || 'An error occurred');
    }
  }
);

export const FormSubmittion = createAsyncThunk(
  'user/submittinForm',
  async({formsubmittion,callApi},{rejectWithValue})=>{
    try{
      const result = await callApi({
        method :'POST',
        url : 'http://localhost:5001/api/v1/userplan/formSubmittion',
        body :formsubmittion,
      })
      return result;

    }catch(error){
      return rejectWithValue(error.message || 'An error occurred');
    }
  }
)

export const login = createAsyncThunk(
  'user/login',
  async ({ userData, navigate, callApi }, { rejectWithValue }) => {
    try {
      const result = await callApi({
        method: 'POST',
        url: 'http://localhost:5001/api/v1/user/login',
        body: userData,
      });

      if (result.token) {
        localStorage.setItem('authToken', result.token);
        localStorage.setItem('userData', JSON.stringify(result.UserFound));
        navigate('/'); // Navigate to the home page after successful login
      }

      return result;
    } catch (error) {
      return rejectWithValue(error.message || 'An error occurred');
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    formSubmittion:null,
    token: localStorage.getItem('authToken') || null,
    userData :JSON.parse(localStorage.getItem('userData'))|| null,
    loading: false,
    error: null,
  },
  reducers: {
    Loggingout(state) {
      state.data = null;
      state.token = null;
      localStorage.removeItem('authToken'); // Clear token on logout
      localStorage.removeItem('userData'); // Clear token on logout
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(submitUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Assuming `user` data is in the response
        state.token = action.payload.token; // Store token in state
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(FormSubmittion.pending,(state)=>{
        state.loading= true;
        state.error= null;
      })
      .addCase(FormSubmittion.fulfilled, (state, action) => {
        state.loading = false;
        state.formSubmittion= action.payload;
      })
      .addCase(FormSubmittion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      
      ;
  },
});
export const { Loggingout } = userSlice.actions;
export default userSlice.reducer;
