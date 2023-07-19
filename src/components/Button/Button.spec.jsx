import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from '.';

describe('<Button />', () => {
    it('should render the button with text "Load more"', () => {
        render(<Button text="Load more" />);
        const button = screen.getByRole('button', { name: /load more/i });

        expect(button).toBeInTheDocument();
    });

    it('should render a button with "btn-load-more" class', () => {
        render(<Button />);
        const button = screen.getByRole('button');

        expect(button).toHaveClass('btn-load-more');
    });

    it('should call a given function when clicked', () => {
        const fn = jest.fn();
        render(<Button onClick={fn} />);
        const button = screen.getByRole('button');

        fireEvent.click(button);

        expect(fn).toBeCalledTimes(1);
    });

    it('should disable the button when "disabled" by prop', () => {
        render(<Button disabled={true} />);
        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
    });

    it('should enable the button when not "disabled" by prop', () => {
        render(<Button disabled={false} />);
        const button = screen.getByRole('button');

        expect(button).toBeEnabled();
    });
})