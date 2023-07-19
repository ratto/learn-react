import { render, screen } from '@testing-library/react';
import { PostCard } from ".";

const mock = {
    id: 1,
    title: 'Mock title',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris libero tellus, tristique sit amet viverra id, ultricies sit amet dolor. Vivamus turpis sem, auctor id sollicitudin vitae, cursus in sapien.',
    cover: {
        title: 'image alt',
        url: 'img/mock.png'
    }
}

describe('<PostCard />', () => {
    let postCard;
    beforeAll(() => {
        postCard = (<PostCard {...mock} />);
    });

    it('should render a PostCard with an image.', () => {
        render(postCard);
        const postImage = screen.getByRole('img');

        expect(postImage).toBeInTheDocument();
        expect(postImage).toHaveAttribute('src', mock.cover.url);
        expect(postImage).toHaveAttribute('alt', mock.cover.title);
    });

    it('should render a PostCard with a title and an body text.', () => {
        render(postCard);
        const heading = screen.getByRole('heading', { name: mock.title });
        const bodyText = screen.getByText(mock.body);

        expect(heading).toBeInTheDocument();
        expect(bodyText).toBeInTheDocument();
    });

    it('should match the snapshot taken.', () => {
        const { container } = render(postCard);

        expect(container.firstChild).toMatchSnapshot();
    });
});