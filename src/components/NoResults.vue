<template>
  <div class="no-results">
    <img class="no-results__image" :src="require('@/assets/error.svg')"/>
    <p class="no-results__description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: ['description']
}
</script>

<style lang="scss" scoped>
.no-results {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 5rem;

  &__image {
    width: 50rem;

    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }

  &__description {
    margin-top: 5rem;

    font-size: var(--title-medium);
    font-weight: 700;

    color: var(--grey-light);
  }
}
</style>
