<template>
  <input
    class="search"
    v-model="searchQuery"
    @keyup.enter="search(searchQuery)"
    placeholder="Search your movies..."
  >
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'search',
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: mapActions(['search'])
}
</script>

<style lang="scss" scoped>
.search {
  width: 100%;

  font-size: var(--title-big);
  font-weight: 700;

  color: var(--white);
  background-color: var(--blue-darkest);

  border-radius: 1rem;
  border: none;

  padding: 2rem;

  &::placeholder {
    color: var(--white);
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 600px) {
    padding: 1.2rem;
  }
}
</style>
