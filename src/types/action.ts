import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

export enum ActionType {
  UsersSucceeded = 'listUsers/UsersSucceeded',
  UsersRequest = 'listUsers/UsersRequest',
  UsersFailed = 'listUsers/UsersFailed',
  SortActive ='sort/sortActive',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<
  R,
  State,
  AxiosInstance,
  Action
>

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>