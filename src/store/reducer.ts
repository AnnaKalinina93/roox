import { State } from '../types/state'
import { createReducer } from '@reduxjs/toolkit'
import { changeSort, usersFailed, usersRequest, usersSucceeded } from './action'

const initialState: State = {
  users: [],
  usersLoading: false,
  usersError: false,
  activeSort: '',
}

export const reducer = createReducer(initialState, (builder) => {
  builder

    .addCase(usersRequest, (state) => {
      state.usersLoading = true
    })

    .addCase(usersSucceeded, (state, action) => {
      state.usersLoading = false
      state.usersError = false
      state.users = action.payload
    })

    .addCase(usersFailed, (state) => {
      state.usersLoading = false
      state.usersError = true
    })

    .addCase(changeSort, (state, action) => {
      state.activeSort = action.payload
    });

})
