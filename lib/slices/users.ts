import { ErrorRounded } from '@mui/icons-material'
import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit'
import { ValidationError } from 'yup'
import axios from '../axios'

export enum UserStates {
  IDLE = 'idle',
  LOADING = 'loading',
}

export const fetchUsers = createAsyncThunk('auth/users', async (_, thunkAPI) => {
  try {
    const response = await axios.get<{ hits: any[] }>('api/users')
    return response.data
  } catch (err) {
    const error = <ValidationError> err;
    return thunkAPI.rejectWithValue({ error: error.message })
  }
})

export interface UserSliceState {
  loading: UserStates
  users: any[]
  error?: SerializedError
}

const internalInitialState: UserSliceState = {
  loading: UserStates.IDLE,
  users: [],
  error: undefined,
}

export const usersSlice = createSlice({
  name: 'users',
  initialState: internalInitialState,
  reducers: {
    reset: () => internalInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = [...action.payload.hits]
      state.loading = UserStates.IDLE
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state = { ...internalInitialState, error: action.error }
      throw new Error(action.error.message)
    })
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = UserStates.LOADING
    })
  },
})

export const { reset } = usersSlice.actions
