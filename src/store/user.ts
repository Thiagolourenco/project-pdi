import create from 'zustand';

export type UserType = {
  avatarUrl: string;
  company: string;
  login: string;
  name: string;
};

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
