import { assert, test } from 'vitest';
import {render, screen} from '@testing-library/react'
import App from '../src/App';
import React from 'react';

test('sum', () => {
  assert.equal(1 + 1, 2);
})

test('app displays correct header', async () => {
  render(<App />)

  const heading = await screen.findByRole('heading');

  expect(heading).toHaveTextContent('Todos');
})