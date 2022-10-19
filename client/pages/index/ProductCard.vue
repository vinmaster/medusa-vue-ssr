<template>
<a :href="`/products/${product.id}`" class="group">
  <div class="w-full overflow-hidden bg-gray-200 rounded-3xl">
    <div class="relative group-hover:opacity-75">
      <img class="object-fit transform transition duration-500 hover:scale-110" :src="url" />
    </div>
  </div>
  <h3 class="mt-4 text-lg font-medium text-gray-900">{{ product.title }}</h3>
  <p class="mt-1 text-sm text-gray-700">{{ $Util.formatDollars(price) }}</p>
</a>
</template>

<script lang="ts" setup>
const props = defineProps<{
  product: any;
}>();
const { url } = props.product.images?.[0];
const price = props.product.variants[0].prices[1].amount / 100;
</script>
