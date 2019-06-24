import Vue from "vue";
import Router from "vue-router";

import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

Vue.use(Router);

export const routes = [
  {
    path: "/",
    name: "movie-list",
    component: MovieList
  },
  {
    path: "/:imdbId",
    name: "movie-detail",
    component: MovieDetail,
    props: true
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
