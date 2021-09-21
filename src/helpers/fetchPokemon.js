

export const fetchAllPokemon = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
} 


export const getPokemon = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}