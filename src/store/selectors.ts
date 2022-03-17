import { State } from '../types/state'
import { User } from '../types/user'
import { createSelector } from 'reselect';
import { ActiveSort } from '../const';

export const getUsers = (state: State): User[] => state.users;
export const getUsersLoading = (state: State): boolean => state.usersLoading;
export const getUsersError = (state: State): boolean => state.usersError;
export const getActiveSort = (state: State): string => state.activeSort;

export const getSortUsers = createSelector([getUsers, getActiveSort],( users, activeSort) => {
    if ( activeSort === ActiveSort.City) {
        return users.slice().sort((user1, user2) => user1.address.city.localeCompare(user2.address.city));
    }

    if ( activeSort === ActiveSort.Company) {
        return users.slice().sort((user1, user2) => user1.company.name.localeCompare(user2.company.name));
    }

    if (activeSort === ActiveSort.Default) {
        return users;
    }
});

