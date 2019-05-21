<template>
  <li class="movie" @click="$router.push(`/${movie.imdbID}`)">
    <poster class="movie__poster" :posterUrl="movie.Poster" :title="movie.Title" />
    <p class="movie__title">{{ movie.Title }}</p>
    <span class="movie__year">{{ movie.Year }}</span>
  </li>
</template>

<script>
import Poster from './Poster'

export default {
  name: 'movie-list-item',
  components: {
    Poster
  },
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.movie {
  list-style: none; // remove the bullet

  transition: all 0.5s;

  padding: 2rem;

  &:hover {
    cursor: pointer;
    background-color: var(--blue-darkest);
  }

  &__poster {
    height: 45rem;

    @media screen and (max-width: 600px) {
      height: 40rem;
    }
  }

  &__title {
    margin-top: 1rem;
    margin-bottom: 0.5rem;

    font-size: var(--title-small);
    font-weight: 700;

    color: var(--white);
  }

  &__year {
    font-size: var(--title-small);

    color: var(--grey-light);
  }

  &__poster {
    width: 100%;
    height: 45rem;
    object-fit: cover;
    border-radius: 1.5rem;
    box-shadow: var(--shadow-dark);

    @media screen and (max-width: 600px) {
      height: 40rem;
    }
  }
}
</style>
