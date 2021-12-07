<script setup>
import { ref } from 'vue'

const pokeList = await useListItems()
const searchText = ref('')
const pokeItem = ref([])
const regExp = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩ㄱ-ㅎㅏ-ㅣ가-힣]/g

async function onSearch() {
  if (isValid()) {
    // const data = await useSearch(`/api/poke?search=${searchText.value}`, { pick: ['id', 'sprites', 'types', 'name', 'weight'] })
    const data = await fetch(`/api/poke?search=${searchText.value}`)
    const json = await data.json()
    console.log(json)
    return (pokeItem.value = json)
  }
  alert('특수문자 혹은 0 을 제외한 영문, 숫자만 입력 가능합니다 :)\n 1 ~ 897')
  pokeItem.value = []
}

function isValid() {
  return (
    (searchText.value !== '' && !regExp.test(searchText.value)) ||
    (Number(searchText.value) > 0 && Number(searchText.value) < 898)
  )
}
</script>
<template>
  <div>
    <!-- 검색 Item -->
    <fetch-item :pokeItem="pokeItem"/>
    <div>
      <form @submit.prevent="onSearch">
        <input type="text" v-model="searchText" />
        <button>Search For Pokemon</button>
      </form>
    </div>
    <!-- Poke List -->
    <list :pokeList="pokeList" />
  </div>
</template>
