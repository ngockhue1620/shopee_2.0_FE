import { render, screen } from '@testing-library/react';
import App from './App';
import { CartItem } from './modules/shopee/components/cart/CartItem';

test('renders learn react link', () => {
  render(<CartItem />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
