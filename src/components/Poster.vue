<template>
  <img class="poster" :src="imageURL" :alt="movieTitle"/>
</template>

<script>
import unknownImage from '@/assets/unknown.jpg'

export default {
  name: 'poster',
  props: {
    posterUrl: String,
    movieTitle: String
  },
  computed: {
    imageURL () {
      return this.posterUrl === 'N/A' ? unknownImage : this.posterUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.poster {
  width: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
  box-shadow: var(--shadow-dark);
}
</style>
