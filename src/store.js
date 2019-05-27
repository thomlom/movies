import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const BASE_URL = `https://www.omdbapi.com/?apikey=${
  process.env.VUE_APP_OMDB_KEY
}`;

export const state = {
  movies: [],
  movie: null,
  error: "",
  // Loading can have three states: hidden, pending, done
  loadingState: "hidden"
};

export const mutations = {
  setLoadingState(state, loadingState) {
    state.loadingState = loadingState;
  },
  setMovies(state, movies) {
    state.movies = movies;
  },
  setMovie(state, movie) {
    state.movie = movie;
  },
  setError(state, error) {
    state.error = error;
  }
};

export const actions = {
  async search({ commit }, input) {
    try {
      commit("setLoadingState", "pending");
      const response = await axios.get(`${BASE_URL}&s=${input}`);
      commit("setLoadingState", "done");

      const { data } = response;

      if (data.Response === "True") {
        return commit("setMovies", data.Search);
      }

      commit("setError", data.Error);
    } catch ({ response }) {
      commit("setLoadingState", "done");
      commit("setError", response.data.Error);
    }
  },
  async getMovie({ commit }, imdbId) {
    commit("setLoadingState", "pending");
    const response = await axios.get(`${BASE_URL}&i=${imdbId}`);
    commit("setLoadingState", "done");

    const { data } = response;

    if (data.Response === "True") {
      commit("setMovie", data);
    }
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
