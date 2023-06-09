import { test, vi } from 'vitest';
import {render, screen} from '@testing-library/react'
import App from '../src/App';
import React from 'react';
import axios from 'axios';

vi.mock('axios');

describe('App component', () => {
  beforeEach(() => {
    vi.mocked(axios.get).mockReset();
  });

  test('app displays correct header', async () => {
    render(<App />);
  
    const heading = await screen.findByRole('heading');
  
    expect(heading).toHaveTextContent('Todos');
  });

  test('app makes API call to todos endpoint', () => {
    vi.mocked(axios.get).mockResolvedValue({
      data: 'hello world'
    })

    render(<App />);

    expect(axios.get).toHaveBeenCalledTimes(1);
  })
});