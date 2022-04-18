import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit'
import { ValidationError } from 'yup';
import { LoginFormFields } from '../../components/forms/hooks/useLoginForm';
import { RegisterFormFields } from '../../components/forms/hooks/useRegisterForm';
import axios from '../axios'

export enum AuthStates {
  IDLE = 'idle',
  LOADING = 'loading',
}

export const fetchUser = createAsyncThunk('auth/me', async (_, thunkAPI) => {
  try {
    const response = await axios.get<{ id?: string, email?: string }>('api/auth/me')

    return response.data
  } catch (err) {
    const error = <ValidationError> err;
    return thunkAPI.rejectWithValue({ error: error.message })
  }
})

export const login = createAsyncThunk(
  'auth/login',
  async (credentials: LoginFormFields, thunkAPI) => {
    console.log(thunkAPI)
    try {
      const response = await axios.post<{ id?: string, email?: string }>('api/auth/login', credentials)
      console.log('login me', response)
      return { me: response.data }
    } catch (err) {
      const error = <ValidationError> err;
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)
export const register = createAsyncThunk(
  'auth/register',
  async (credentials: RegisterFormFields, thunkAPI) => {
    try {
      const response = await axios.post<{ user: any }>('api/auth/register', credentials)
      console.log('register me', response)
      return { me: response.data.user }
    } catch (err) {
      const error = <ValidationError> err;
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)
export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await axios.delete<{ accessToken: string }>('api/auth/logout')
    return response.data
  } catch (err) {
    const error = <ValidationError> err;
    return thunkAPI.rejectWithValue({ error: error.message })
  }
})

export interface AuthSliceState {
  loading: AuthStates
  me?: {
    id?: string
    email?: string
  }
  error?: SerializedError
}

const internalInitialState: AuthSliceState = {
  loading: AuthStates.IDLE,
  me: undefined,
  error: undefined,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: internalInitialState,
  reducers: {
    reset: () => internalInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('action', action.payload)
      state.me = action.payload.me
      state.loading = AuthStates.IDLE
    })
    builder.addCase(login.rejected, (state, action) => {
      state = { ...internalInitialState, error: action.error }
      throw new Error(action.error.message)
    })
    builder.addCase(logout.pending, (state) => {
      state.loading = AuthStates.LOADING
    })
    builder.addCase(logout.fulfilled, (_state) => internalInitialState)
    builder.addCase(login.pending, (state) => {
      state.loading = AuthStates.LOADING
    })
    builder.addCase(register.fulfilled, (state, action) => {
      state.me = action.payload.me
      state.loading = AuthStates.IDLE
    })
    builder.addCase(register.rejected, (state, action) => {
      state.error = action.error
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state = { ...internalInitialState, error: action.error }
      throw new Error(action.error.message)
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.me = action.payload
    })
  },
})

export const { reset } = authSlice.actions
