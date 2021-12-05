<script setup>
defineProps({
  pokeList: {
    type: Object,
    required: true,
  },
})
const IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"

function onRenderImg (url) {
  let parse = url.replace(/\//g,'');
  return `${IMG_URL}${parse.substring(33,28)}.png`
}

</script>
<template>
  <div class="grid-template">
    <div class="center" v-for="(item, index) in pokeList?.results" :key="index">
      <img class="size" :src="onRenderImg(item.url)" alt="" />
      <span class="badge">{{ item.name }}</span>
    </div>
  </div>
</template>