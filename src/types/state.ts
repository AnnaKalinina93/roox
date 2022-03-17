import { User } from './user';

export type State = {
    users : User[],
    usersLoading: boolean,
    usersError: boolean,
    activeSort: string,
}