// 조회 API
export const fetchList = async () => {
    return await $fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
}
export const useListItems = async () => {
    const pokeList = useState('pokeList')
    pokeList.value = await fetchList()
    return pokeList
}