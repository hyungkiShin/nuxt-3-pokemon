<script setup lang="ts">
import { ref } from "vue";

const searchText = ref("");
const pokeItem = ref([]) as any;
async function onSearch() {
  const data = await fetch(`/api/poke?search=${searchText.value}`);
  const json = await data.json();
  pokeItem.value = json;
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
  </div>
</template>
