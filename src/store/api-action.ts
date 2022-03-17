import { ThunkActionResult } from '../types/action'
import { User } from '../types/user'
import { usersFailed, usersRequest, usersSucceeded } from './action'

export const fetchUsersAction = (): ThunkActionResult => async (
  dispatch,
  _,
  api,
): Promise<void> => {
  dispatch(usersRequest())
  try {
    const { data } = await api.get<User[]>('/')
    dispatch(usersSucceeded(data))
  } catch {
    dispatch(usersFailed())
  }
}
