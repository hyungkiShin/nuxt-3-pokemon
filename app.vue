<script setup >
import { useParseStrImage } from '@/composables/pokemon'
import { ref } from 'vue'
const pokeList = await useListItems()
// const renderImg = await useParseStrImage()
const searchText = ref('')
// interface item {
//   id: string | number,
//   name: string,
//   img: any,
//   sprites: any,
//   value: any
// }
const pokeItem = ref([])

const regExp = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩ㄱ-ㅎㅏ-ㅣ가-힣]/g

async function onSearch() {
  if (!regExp.test(searchText.value) || Number(searchText.value) > 0) {
    const data = await fetch(`/api/poke?search=${searchText.value}`)
    const json = await data.json()
    console.log(json)
    return (pokeItem.value = json)
  }
  alert('특수문자 혹은 0 을 제외한 영문, 숫자만 입력 가능합니다 :)')
  pokeItem.value = []
}

const numValid = id => {
  return id > 0 ? `00${id}` : ''
}
</script>
<template>
  <div>
    <div v-if="pokeItem.sprites" style="background-color: #4c4c4c">
      <div>
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
          <div style="color: white">Name: {{ pokeItem.name }}</div>
          <div>Type:</div>
        </div>
      </div>
    </div>
    {{pokeList}}

    <div>
      <form @submit.prevent="onSearch">
        <input type="text" v-model="searchText" />
        <button>Search For Pokemon</button>
      </form>
    </div>
    <div class="grid-template">
      <div class="center" v-for="(item, index) in result" :key="index">
        <!-- <img class="size" :src="renderImg(item.url)" alt="" /> -->
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