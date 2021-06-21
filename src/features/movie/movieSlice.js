import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  recommend: null,
  newAdded: null,
  trending: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.newlyAdded = action.payload.newAdded;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewAdded = (state) => state.movie.newlyAdded;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
