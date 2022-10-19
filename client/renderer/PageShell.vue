<template>
  <Nav />
  <main class="main">
    <slot />
  </main>
</template>

<script lang="ts" setup>
import Link from './Link.vue';
import Nav from './Nav.vue';
import './index.css';
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  font-family: "Arial", "sans-serif";
  color: #333333;
}

*::selection {
  background-color: #f5ab3d;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.main {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
