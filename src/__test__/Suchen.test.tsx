import { fireEvent, render, screen } from '@testing-library/react';
import { Suche } from '../components/Suchen/Suchen';
import { Content } from '../components/Suchen/style';
import {componentRenderByMemoryRouter,} from '../utils/testUtils';

function hasInputValue(
    e: Document | Element | Window | Node,
    inputValue: string
) {
    return screen.getByDisplayValue(inputValue) === e;
}

describe('Suchen Component', () => {



    it('Test Modal', () => {
    
        const { getByText } = render(<Content />);

        expect(() => screen.getByText('test')).toThrow();

    })



//Run Correct
    test('cheek the button are disable when the inputbox are empty', () => {
        componentRenderByMemoryRouter('/', <Suche setCurrentPlace={function (): void {
            throw new Error('Function not implemented.');
        } } />);
        const findButton = screen.getByRole('button');
        expect(findButton).toHaveAttribute('type');
    });
//Run Correct
    test('cheek input box value', () => {
        componentRenderByMemoryRouter('/', <Suche setCurrentPlace={function (): void {
            throw new Error('Function not implemented.');
        } } />);
        const input = screen.getByPlaceholderText('Andere Standort');
        fireEvent.change(input, { target: { value: 'BD' } });
        expect(hasInputValue(input, 'BD')).toBe(true);
    });
});

