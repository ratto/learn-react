import { render } from '@testing-library/react';
import { Home } from '.';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = true;
  expect(linkElement).toBeTruthy();
})
