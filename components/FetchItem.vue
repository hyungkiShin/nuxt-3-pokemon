<script setup>
defineProps({
  pokeItem: {
    type: Object,
    required: true,
  },
})
const numValid = id => {
  return id > 0 ? `00${id}` : ''
}
</script>
<template>
  <div v-if="pokeItem.sprites" class="main-box">
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
        <div style="line-height: 1.2; margin-left: 13px">
          <div style="color: white">Name: {{ pokeItem.name }}</div>
          <div style="color: white">
            Type: {{ pokeItem?.types[0]?.type.name }}
          </div>
          <div style="color: white">Wheight: {{ pokeItem?.weight }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
