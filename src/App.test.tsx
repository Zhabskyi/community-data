import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  const { getByText } = render(<App />);
  await waitForElement(() => getByText("Community name: Auburn Bay"));
  expect(getByText("Community name: Auburn Bay")).toBeInTheDocument();
});
