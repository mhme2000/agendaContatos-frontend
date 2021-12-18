import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render text in screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Agenda de Contatos/i);
  expect(linkElement).toBeInTheDocument();
});
