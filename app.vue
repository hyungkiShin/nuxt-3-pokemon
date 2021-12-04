<script setup lang="ts">
import { useListItems, useParseStrImage } from "@/composables/pokemon";
import { ref } from "vue";
const searchText = ref("");
const pokeItem = ref([]) as any;
const { results } = (await useListItems()) as any;

async function onSearch() {
  if (searchText.value) {
    const data = await fetch(`/api/poke?search=${searchText.value}`);
    const json = await data.json();
    console.log(json);
    return (pokeItem.value = json);
  }
  pokeItem.value = []
}
</script>
<template>
  <div>
    <form @submit.prevent="onSearch">
      <input type="text" v-model="searchText" />
      <button>Search For Pokemon</button>
    </form>
    <img
      :src="pokeItem?.sprites?.other['official-artwork'].front_default"
      alt=""
    />

    <div class="grid-template">
      <div class="center" v-for="(item, index) in results" :key="index">
        <img :src="useParseStrImage(item.url)" alt="" />
        <span class="badge">{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.grid-template {
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(3, 1fr);
}
.center {
  text-align: center;
}
.badge {
  background: beige;
}
</style>