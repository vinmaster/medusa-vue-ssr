<template>
  <div class="bg-yellow-300 text-yellow-900">
    <div class="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-6 lg:max-w-7xl">
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from './ProductCard.vue';

const props = defineProps<{
  products: any[];
}>();
</script>
