# The problem

Based on the public API https://pokeapi.co/docs/v2, I was challenged of creating a web-app with a Frontend framework of my choice (React)

## My Solution

Within our application we will find the initial Pokemon grid, having the possibility of:
- show 10, 20 or 50 through a dropdown.
- re-arrange that grid based on name, id, weight or height (in an increasing and decreasing way).
- search within the same component by name or ability (with error handling).

Inside each card we will have:
- Pokemon ID.
- Type.
- weight and height.
- abilities.
- Link to more information.

## Before start

be aware of get the latest version of node. You can test it through:

node --version.


In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
As a proof of concept only I added one test, since I prefered give priority to other tasks.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.



### Functions 

Filter pokemon: we have to pass to the function query and data (based on the input and radio button) and that can retrieve an array of pokemons with the same abilities or single pokemon.
```
const filterPokemon = async (query, data) => {
  try {
    setLoader(true);
    const baseURL = `https://pokeapi.co/api/v2/${query}/${data}?limit=${results}&offset=${offset}`
    const pokemon = await fetch(baseURL);
    const resp = await pokemon.json();
    if(resp.pokemon) {
      let pokemonFiltered = []
      for (let i = 0; i < resp.pokemon.length; i++) {
        pokemonFiltered.push(resp.pokemon[i].pokemon)
      }
      await loadingPokemon(pokemonFiltered);
    } else {
      setErrorMessage(0)
      setSearchPokemon(resp)
    }
    setLoader(false);
  } catch (error) {
    setErrorMessage(1)
    console.log('Not results for your search. Try again!')
    setLoader(false);
  }
}

```



