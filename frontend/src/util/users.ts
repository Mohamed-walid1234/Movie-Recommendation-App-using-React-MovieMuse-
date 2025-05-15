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


  fatchUsers: async () => {
    try {
      const response = await fetch("/api/profile/login");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data: User[] = await response.json();
      set({ users: data });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
}));











// get user by email
interface User {
  name: string;
  email: string;
  password: string;
}
interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
}
export const useUserStore = create<UserState>((set) => ({
  users: [],
  loading: false,
  error: null,
  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('http://localhost:5000/api/profile');
      if (!res.ok) throw new Error('Failed to fetch Users');
      const data: User[] = await res.json();
      set({ users: data, loading: false });
    } catch (err) {
      set({ error: (err as Error).message, loading: false });
    }
  },
}));