import create from 'zustand';
import {UserType} from '../@types';

type UserStateType = {
  users: UserType[];
  addUser: (user: UserType) => void;
};

const useUserStore = create<UserStateType>(set => ({
  users: [],
  addUser: (user: UserType) => {
    set(state => ({users: [...state.users, user]}));
  },
}));

export default useUserStore;
