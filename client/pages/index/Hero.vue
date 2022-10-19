<template>
  <header class="parent" :style="{
    backgroundImage: ` url('https://loremflickr.com/1200/800')`
  }">
    <div class="wrapper">
      <h1 class="text title">SHOP</h1>
      <p class="text desc">YOUR FAVORITE CLOTHES HERE</p>
      <a href="/products">
        <button class="text-yellow-900 bg-yellow-300 rounded hover:bg-blue-700 hover:text-gray-100 hover:font-medium py-2 px-2" size="lg">
          SHOP PRODUCTS HERE
        </button>
      </a>
    </div>
  </header>
</template>

<style lang="postcss" scoped>
.parent {
  @apply bg-cover bg-center flex flex-col justify-end;
}
.title {
  @apply text-5xl font-bold p-2;
  animation: slideIn 0.8s ease;
}
.desc {
  @apply text-2xl p-2;
  animation: slideIn 1.2s ease;
}
.btn--slide {
  animation: slideIn 1.6s ease;
}
.wrapper {
  @apply text-white md:pl-10 py-8 flex flex-col justify-end items-start gap-4;
  animation: fadeIn 1.4s ease;
}
</style>
<style lang="scss" scoped>
.text {
  background-color: rgba(0, 0, 0, 0.65);
  max-width: 60ch;
}
</style>