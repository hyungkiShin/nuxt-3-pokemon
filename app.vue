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
  pokeItem.value = [];
}
</script>
<script lang="ts">
export default {
  methods: {
    numValid(id) {
      return id > 0 ? `00${id}` : "";
    },
  },
};
</script>
<template>
  <div>
    <div style="background-color: #4c4c4c">
      <div class="illustrated_id">
        펫 도감
        <span style="color: #c7c2b5">No.{{ numValid(pokeItem.id) }}</span>
      </div>
      <div>
        <div class="wrapper">
          <img
            class="size"
            :src="pokeItem?.sprites?.other['official-artwork'].front_default"
            alt=""
          />
        </div>
        <div style="color: white">{{ pokeItem.name }}</div>
        <div>타입</div>
      </div>
    </div>

    <div>
      <form @submit.prevent="onSearch">
        <input type="text" v-model="searchText" />
        <button>Search For Pokemon</button>
      </form>
    </div>
    <div class="grid-template">
      <div class="center" v-for="(item, index) in results" :key="index">
        <img class="size" :src="useParseStrImage(item.url)" alt="" />
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
.size {
  width: 190px;
  height: 190px;
}
.wrapper {
  background: white;
  border-radius: 35px;
  justify-content: center;
  display: flex;
  width: 23%;
  margin: 2%;
}
.illustrated_id {
  width: 120px;
  border: 1px solid;
  text-align: center;
  color: white;
  height: 22px;
}
</style>