<template>
  <Hero />
  <h2 class="text-2xl font-extrabold text-gray-900 bg-slate-500 dark:text-gray-100 p-6 text-center">Feature Products</h2>
  <ProductList :products="products" />
</template>

<script lang="ts" setup>
import Hero from './Hero.vue';
import ProductList from './ProductList.vue';

// defineProps(['products'])
const props = defineProps<{
  products: any[];
}>();
</script>
