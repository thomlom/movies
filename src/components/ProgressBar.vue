<template>
  <div class="progress-bar" :class="`progress-bar--${loadingState}`"></div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'progress-bar',
  computed: mapState(['loadingState']),
  methods: mapMutations(['setLoadingState']),
  watch: {
    loadingState (state) {
      if (state === 'done') {
        setTimeout(() => this.setLoadingState('hidden'), 600)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.progress-bar {
  position: fixed;
  top: 0px;
  width: 0%;
  height: 0.4rem;
  background-color: var(--blue-light);
  transition: all 0.4s;
  opacity: 1;

  &--hidden {
    opacity: 0;
  }

  &--pending {
    width: 20%;
  }

  &--done {
    width: 100%;
  }
}
</style>
