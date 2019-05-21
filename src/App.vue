<template>
  <div>
    <progress-bar></progress-bar>
    <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar";

export default {
  name: "app",
  components: {
    ProgressBar
  }
};
</script>

<style lang="scss">
@import url("https://rsms.me/inter/inter.css");

html {
  font-family: "Inter", sans-serif;
  font-size: 62.5%;
  box-sizing: border-box;
}

@supports (font-variation-settings: normal) {
  html {
    font-family: "Inter var", sans-serif;
  }
}

body {
  font-weight: 400;
  background-color: var(--blue-dark);
}

* {
  box-sizing: inherit;
}

:root {
  --blue-darkest: hsl(211, 98%, 6%);
  --blue-dark: hsl(211, 95%, 9%);
  --blue: hsl(211, 90%, 30%);
  --blue-light: hsl(211, 85%, 50%);
  --blue-lightest: hsl(211, 80%, 60%);

  --white: hsl(210, 36%, 96%);
  --grey-light: hsl(211, 27%, 70%);
  --yellow: hsl(39, 100%, 61%);

  // different font-size
  --title-big: 4.8rem;
  --title-medium: 3.6rem;
  --title-small: 2.4rem;

  --text-big: 2.4rem;
  --text-medium: 2rem;
  --text-small: 1.6rem;

  // box-shadow
  --shadow-dark: 0 4px 8px hsla(0, 0%, 0%, 0.4);

  @media screen and (max-width: 900px) {
    --title-big: 4rem;
    --title-medium: 2.5rem;
    --title-small: 2rem;

    --text-big: 2.2rem;
  }

  @media screen and (max-width: 600px) {
    --title-big: 3rem;
    --title-medium: 2.2rem;
    --title-small: 1.8rem;

    --text-big: 1.8rem;
    --text-medium: 1.5rem;
  }
}
</style>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  padding: 2rem 4rem;
  @media screen and (max-width: 600px) {
    padding: 1rem 2rem;
  }
}
</style>
