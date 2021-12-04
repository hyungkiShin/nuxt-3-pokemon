export const useListItems = async () => {
    return await $fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
}

export const useParseStrImage = (url: string) => {
    let parse = url.replace(/\//g,'');
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${parse.substring(33,28)}.png`
  }