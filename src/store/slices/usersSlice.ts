import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "@/data/users.ts";

interface UsersState {
  users: User[];
  selectedUser: User | null;
}

const initialState: UsersState = {
  users: [],
  selectedUser: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id,
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    updateUserProjects: (
      state,
      action: PayloadAction<{ id: number; projects: number }>,
    ) => {
      const user = state.users.find((user) => user.id === action.payload.id);
      if (user) {
        user.projects = action.payload.projects;
      }
    },
    setSelectedUser: (state, action: PayloadAction<User | null>) => {
      state.selectedUser = action.payload;
    },
  },
});

export const { setUsers, updateUser, updateUserProjects, setSelectedUser } =
  usersSlice.actions;

export default usersSlice.reducer;
