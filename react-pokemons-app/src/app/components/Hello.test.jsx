import { createRoot } from 'react-dom/client';
import { act } from 'react-dom/test-utils';

import Hello from './Hello';
import { afterEach, expect, test } from 'vitest';
import { render, cleanup, screen } from '@testing-library/react';
import "@testing-library/jest-dom/vitest";

// test('Hello component renders Test', () => {
//   const div = document.createElement('div');
//   document.body.appendChild(div);
//   const root = createRoot(div);

//   act(() => {
//     root.render(<Hello name="Romain" age={30} />);
//   });

//   expect(div.textContent).toContain("Romain");

//   root.unmount();
// });

afterEach(() => {
  cleanup();
});

test('Hello component renders correctly', () => {
  render(<Hello name="Romain" age={30} isActive={true} />);

  screen.debug();

  // const helloDiv = document.querySelector('.Hello');
  const helloDiv = screen.queryByTestId('hello-component');
  expect(helloDiv).toBeInTheDocument();
});

test('Hello component renders correctly', () => {
  render(<Hello name="Romain" age={30} isActive={true} />);
  // console.log(document.body.innerHTML);
});