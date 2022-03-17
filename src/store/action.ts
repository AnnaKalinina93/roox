import { ActionType } from '../types/action';
import { createAction } from '@reduxjs/toolkit';
import { User } from '../types/user';

export const usersSucceeded = createAction(
  ActionType.UsersSucceeded,
  (users: User[]) => ({
    payload: users,
  }),
);

export const usersRequest = createAction(ActionType.UsersRequest);

export const usersFailed = createAction(ActionType.UsersFailed);

export const changeSort = createAction(
    ActionType.SortActive,
    (activeSort: string) => ({
      payload: activeSort,
    }),
  );
