import { create } from "zustand";

export const useMovieStore = create((set) => ({
  movies: [],
  loading: false,
  error: null,
  fetchMovies: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('http://localhost:5000/api/movies');
      if (!response.ok) throw new Error('Failed to fetch movies');
      const data = await response.json();
      set({ movies: data, loading: false });
    } catch (error) {
      set({ error: 'error.message', loading: false });
    }
  },
}));