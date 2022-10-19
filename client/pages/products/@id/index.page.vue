<template>
  <div class="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
    <div class="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
      <div class="md:flex items-center -mx-10">
        <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
          <div class="relative">
            <img :src="url" class="w-full relative z-10" alt="">
            <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
          </div>
        </div>
        <div class="w-full md:w-1/2 px-10">
          <div class="mb-10">
            <h1 class="font-bold uppercase text-2xl mb-5">{{ product.title }}</h1>
            <p class="text-sm">{{ product.description }}</p>
          </div>

          <div v-for="(option, i) in optionsList">
            <label for="size" class="block mb-2 text-xl font-medium text-gray-900 dark:text-gray-400">{{ option.title
            }}:
            </label>
            <select id="size" v-model="selections[i].value"
              class="mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected disabled value="">Choose one</option>
              <option v-for="o in option.options" :value="o.option_id">{{ o.value }}</option>
            </select>
          </div>

          <div class="mt-8" v-if="selections.every(s => s.value !== '')">
            <div class="inline-block align-bottom mr-5">
              <span class="font-bold text-5xl leading-none align-baseline">{{ $Util.formatDollars(price) }}</span>
            </div>
            <div class="inline-block align-bottom">
              <button
                class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i
                  class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, ref, watch } from 'vue';

const props = defineProps<{
  product: any;
}>();

let optionsList: {
  title: string;
  id: string;
  options: any[];
}[] = props.product.options.map((o: any) => ({ title: o.title, id: o.id, options: [] }));
let selections: Ref<string>[] = optionsList.map(() => ref(''));
// Populate optionsList with variants and update price when selections change
let variants: Record<string, any>[] = props.product.variants.map((v: { prices: any[], options: any[]; }) => {
  let obj: any = { price: v.prices.find(p => p.currency_code === 'usd').amount / 100 };
  v.options.forEach(o => {
    obj[o.option_id] = true;
    optionsList.forEach(l => {
      if (l.id === o.option_id &&
        l.options.findIndex(p => p.value === o.value) === -1) l.options.push({ value: o.value, option_id: o.option_id });
    });
  });
  return obj;
});
let price = ref(0);

watch(selections, () => {
  let found = variants.find(v => selections.every(s => v[s.value]));
  if (found) price.value = found.price;
});

const { url } = props.product.images?.[0];
</script>
