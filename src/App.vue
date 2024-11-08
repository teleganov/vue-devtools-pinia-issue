<script setup lang="ts">
import { useDbStore } from '@/stores/store'
import { storeToRefs } from 'pinia'

const dbStore = useDbStore()
const { testAction } = dbStore;
const { items } = storeToRefs(dbStore);
</script>
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
  </header>
  Item count: {{items.size}}

  <div style="display: flex;flex-direction: column;gap:1rem;">
    <button type="button" @click="testAction(1000)">Add 1,000 items (slow)</button>
    <button type="button" @click="testAction(10000)">Add 10,000 items (VERY slow)</button>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

}
</style>
