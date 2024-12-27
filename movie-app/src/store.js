import { createStore } from 'vuex';

export default createStore({
  state: {
    movies: [],
  },
  getters: {
    movies(state) {
      return state.movies;
    },
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    addMovie(state, movie) {
      state.movies.push(movie);
    },
    deleteMovie(state, movieId) {
      state.movies = state.movies.filter(movie => movie.id !== movieId);
    },
  },
  actions: {
    async fetchMovies({ commit }) {
      const movies = [
        { id: 1, title: 'Movie 1' },
        { id: 2, title: 'Movie 2' },
        { id: 3, title: 'Movie 3' },
      ];
      commit('setMovies', movies);
    },
    addMovie({ commit }, movie) {
      commit('addMovie', movie);
    },
    deleteMovie({ commit }, movieId) {
      commit('deleteMovie', movieId);
    },
  },
});
