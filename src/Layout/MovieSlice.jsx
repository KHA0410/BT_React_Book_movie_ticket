import { createSlice } from '@reduxjs/toolkit'
import { movieArr } from './data';

const initialState = {
    movieArr: movieArr,
}

const MovieSlice = createSlice({
  name: "MovieSlice",
  initialState,
  reducers: {
    setMovieList: (state, action) => {
        state.movieArr = action.payload;
    }
  }
});

export const {} = MovieSlice.actions

export default MovieSlice.reducer