import { configureStore, combineReducers, AnyAction, Action, ThunkAction } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { authSlice } from './slices/auth'
import { usersSlice } from './slices/users'

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    usersReducer: usersSlice.reducer,
  }
})

const makeStore = () => store

type Store = ReturnType<typeof makeStore>;

export const wrapper = createWrapper(makeStore, { debug: true })
export type AppState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

