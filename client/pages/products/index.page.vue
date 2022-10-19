<template>
  <h2 class="text-2xl font-extrabold text-gray-900 bg-slate-500 dark:text-gray-100 p-6 text-center">Products List</h2>
  <ProductList :products="products" />
</template>

<script lang="ts" setup>
import ProductList from '../index/ProductList.vue';

// defineProps(['products'])
const props = defineProps<{
  products: any[];
}>();
</script>
