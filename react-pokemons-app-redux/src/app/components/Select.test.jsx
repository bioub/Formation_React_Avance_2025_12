import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, expect, test, vi } from "vitest";
import Select from "./Select";
import "@testing-library/jest-dom/vitest";

afterEach(() => {
  // Cleanup the DOM after each test to avoid test interference
  cleanup();
});

test('Select component renders correctly', () => {
  render(<Select value="One" items={["One", "Two", "Three"]} onValueChange={() => {}} />);
});

test('Select component renders value', () => {
  render(<Select value="One" items={["One", "Two", "Three"]} onValueChange={() => {}} />);

  const element = screen.queryByText('One');
  expect(element).toBeInTheDocument();
});

test('Select component renders all options when open', () => {
  render(<Select value="One" items={["One", "Two", "Three"]} onValueChange={() => {}} />);
  
  const valueElement = screen.getByText('One');

  // Simulate click to open the menu
  fireEvent.click(valueElement);

  const optionTwo = screen.queryByText('Two');
  const optionThree = screen.queryByText('Three');

  expect(optionTwo).toBeInTheDocument();
  expect(optionThree).toBeInTheDocument();
});

test('Select component calls onValueChange when an option is selected', () => {
  const mockOnValueChange = vi.fn();
  render(<Select value="One" items={["One", "Two", "Three"]} onValueChange={mockOnValueChange} />);
  
  const valueElement = screen.getByText('One');

  // Simulate click to open the menu
  fireEvent.click(valueElement);

  const optionTwo = screen.queryByText('Two');

  fireEvent.click(optionTwo);
  expect(mockOnValueChange).toHaveBeenCalledWith('Two');
});