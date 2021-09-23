import { render } from '@testing-library/react';
import { PokemonCard } from '../components/PokemonCard';


describe('It the error message will show', () => {
    it('rendered card if pass correct prop', () => {
        const { getByTestId } = render(<PokemonCard searchPokemon={null} />);
        const pokemonCard = getByTestId('pokemonCard');
        expect(pokemonCard).toBeFalsy();
    })
})