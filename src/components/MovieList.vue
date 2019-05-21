<template>
  <div>
    <search></search>
    <no-results v-if="error" :description="error"></no-results>
    <ul class="grid" v-else>
      <movie-list-item v-for="movie in movies" :movie="movie" :key="movie.imdbID"/>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import NoResults from './NoResults'
import MovieListItem from './MovieListItem'
import Search from './Search'

export default {
  name: 'movie-list',
  components: {
    MovieListItem,
    NoResults,
    Search
  },
  computed: mapState(['error', 'movies'])
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2.5rem;

  padding: 0;
  margin: 0;
  margin-top: 4rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    margin-top: 2rem;
  }
}
</style>
