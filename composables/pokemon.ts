export const fetchList = async () => {
    return await $fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
}
export const useListItems = async () => {
    const pokeList = useState('pokeList')
    pokeList.value = await fetchList()
    return pokeList
}

export const useParseStrImage = (url: string) => {
    let parse = url.replace(/\//g,'');
    const renderImg = useState('renderImg')
    return renderImg.value = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parse.substring(33,28)}.png`
  }