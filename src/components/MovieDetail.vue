<template>
  <div class="movie" v-if="movie">
    <poster class="movie__poster" :posterUrl="movie.Poster" :title="movie.Title"/>
    <div class="movie__body">
      <h2 class="movie__title">{{ movie.Title }}</h2>
      <div class="movie__details">
        <span class="movie__rating">{{ movie.imdbRating }}</span>
        <div class="movie__main-infos">
          <span>{{ movie.Genre }}</span>
          &bull;
          <span>{{ movie.Year }}</span>
          &bull;
          <span>{{ movie.Runtime }}</span>
          &bull;
          <span>{{ movie.Rated }}</span>
        </div>
      </div>
      <p class="movie__plot">{{ movie.Plot }}</p>
      <table>
        <tr class="information" v-for="field in fields" :key="field.name">
          <td class="information__name">{{ field.name }}</td>
          <td class="information__value">{{ field.value }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Poster from "./Poster";

export default {
  name: "movie-detail",
  components: {
    Poster
  },
  computed: {
    ...mapState(["movie"]),
    fields() {
      return [
        {
          name: "Director",
          value: this.movie.Director
        },
        {
          name: "Actors",
          value: this.movie.Actors
        },
        {
          name: "Country",
          value: this.movie.Country
        },
        {
          name: "Production",
          value: this.movie.Production
        },
        {
          name: "Box Office",
          value: this.movie.BoxOffice
        },
        {
          name: "Awards",
          value: this.movie.Awards
        }
      ];
    }
  },
  async mounted() {
    const imdbId = this.$route.params.imdbId;
    if (!this.movie || (this.movie && this.movie.imdbID !== imdbId)) {
      return this.getMovie(imdbId);
    }
  },
  methods: mapActions(["getMovie"])
};
</script>

<style lang="scss" scoped>
.movie {
  display: flex;

  width: 70%;

  margin: auto;
  margin-top: 4rem;

  @media screen and (max-width: 1200px) {
    width: 85%;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    width: 95%;

    margin: 1rem auto;
  }

  &__poster {
    width: 40%;

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  &__body {
    margin-left: 6rem;

    @media screen and (max-width: 900px) {
      margin-top: 2.5rem;
      margin-left: 0;
    }
  }

  &__title {
    margin: 0;

    font-size: var(--title-big);
    font-weight: 700;

    color: var(--white);
  }

  &__details {
    display: flex;
    align-items: center;

    margin-top: 1rem;

    font-size: var(--text-medium);

    color: var(--grey-light);
  }

  &__rating {
    padding: 1rem;

    font-weight: 700;

    background-color: var(--yellow);
    color: #222;

    border-radius: 5px;
  }

  &__main-infos {
    margin-left: 2rem;
  }

  &__plot {
    font-size: var(--text-big);
    color: var(--white);
    line-height: 1.5;
  }
}

.information {
  & > * {
    font-size: var(--text-medium);
    padding: 0.8rem 0;

    @media screen and (max-width: 600px) {
      padding: 0.4rem 0;
    }
  }

  &__name {
    color: var(--grey-light);
  }

  &__value {
    padding-left: 2rem;
    color: var(--white);
    font-weight: 600;
  }
}
</style>
