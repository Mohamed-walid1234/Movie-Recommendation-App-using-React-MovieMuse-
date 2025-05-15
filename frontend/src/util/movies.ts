import { create } from "zustand";
interface Movie {
  _id: string;
  title: string;
  genre: string;
  year: number;
}
interface MovieState {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  fetchMovies: () => Promise<void>;
}
export 
const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  loading: false,
  error: null,
  fetchMovies: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('http://localhost:5000/api/movies');
      if (!res.ok) throw new Error('Failed to fetch movies');
      const data: Movie[] = await res.json();
      set({ movies: data, loading: false });
    } catch (err) {
      set({ error: (err as Error).message, loading: false });
    }
  },
}));