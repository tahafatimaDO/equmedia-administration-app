import { configureStore, combineReducers, AnyAction, Reducer, Action, ThunkAction } from '@reduxjs/toolkit'
import { truncate } from 'fs'
import { createWrapper, MakeStore, HYDRATE, Context } from 'next-redux-wrapper'
import { authSlice, AuthSliceState } from './slices/auth'
import { usersSlice } from './slices/users'

const combinedReducer = combineReducers({
  authReducer: authSlice.reducer,
  usersReducer: usersSlice.reducer,
})

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  }
  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer
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

