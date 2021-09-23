import { render } from '@testing-library/react';
import { Navbar } from '../components/Navbar';


describe('Navbar component', () => {
    it('rendered Navbar', () => {
        const { getByTestId } = render(<Navbar />);
        const navbar = getByTestId('navBar');
        expect(navbar).toBeTruthy();
    })
})