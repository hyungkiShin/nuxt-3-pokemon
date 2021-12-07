<script setup>
const searchText = ref('')
const pokeItem = ref([])
const regExp = /[!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩ㄱ-ㅎㅏ-ㅣ가-힣]/g

async function onSearch() {
  if (isValid()) {
    const { data } = await useFetch(`/api/poke?search=${searchText.value}`, { pick: ['id', 'sprites', 'types', 'name', 'weight'] })
    const json = await data.json()
    console.log(json)
    return (pokeItem.value = json)
  }
  alert('특수문자 혹은 0 을 제외한 영문, 숫자만 입력 가능합니다 :)\n 1 ~ 897')
  pokeItem.value = []
}

function isValid() {
  return searchText.value !== "" && !regExp.test(searchText.value) || (Number(searchText.value) > 0 && Number(searchText.value) < 898)
}
</script>
<template>
    <div v-if="pokeItem.sprites" class="main-box">
      <div>
        <div>
          <div class="illustrated_id">
            9펫 도감
            <span style="color: #c7c2b5">No.{{ numValid(pokeItem.id) }}</span>
          </div>
          <div>
            <div class="wrapper">
              <img class="size" :src="pokeItem?.sprites?.other['official-artwork'].front_default" alt="" />
            </div>
            <div>
              <div style="color: white">Name: {{ pokeItem.name }}</div>
              <div style="color: white">Type:{{pokeItem?.types[0]?.type.name}}</div>
              <div style="color: white">Wheight:{{pokeItem?.weight}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <form @submit.prevent="onSearch">
        <input type="text" v-model="searchText" />
        <button>Search For Pokemon</button>
      </form>
    </div>
</template>