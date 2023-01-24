import { configureStore } from '@reduxjs/toolkit';
import { reset } from './actions';
import { addMovie, moviesReducer, removeMovie } from './slices/moviesSlice';
import { addSong, removeSong, songsReducer } from './slices/songsSlice';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, reset, addSong, removeSong, addMovie, removeMovie };
