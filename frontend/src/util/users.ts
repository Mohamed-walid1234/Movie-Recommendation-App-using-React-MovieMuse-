import { create } from "zustand";

interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
}

interface UsersUtilState {
  users: User[];
  setUsers: (users: User[]) => void;
  createUsers: (newUser: User) => Promise<{ success: boolean; message: string }>;
}

export const useUsersUtil = create<UsersUtilState>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  createUsers: async (newUser) => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      return { success: false, message: "Please fill all the fields" };
    }

    try {
      const response = await fetch("/api/profile/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        const error = await response.text();
        return { success: false, message: error || "Failed to create user" };
      }

      const data: User = await response.json();
      set((state) => ({ users: [...state.users, data] }));
      return { success: true, message: "User created successfully" };
    } catch (err) {
      return { success: false, message: "Network or server error" };
    }
  },
}));
