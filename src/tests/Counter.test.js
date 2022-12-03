import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

beforeEach(() => {
    // Render the Counter component here
    <Counter/>
});

test('renders counter message', () => {
    // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    const Message = screen.getByText(/Counter/i);
    expect(Message).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
    // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    const Message = screen.getByText(/Counter/i);
    expect(Message).toBeInTheDocument();

});

test('clicking + increments the count', () => {
    // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    const Message = screen.getByText(/Counter/i);
    expect(Message).toBeInTheDocument();
    userEvent.click(screen.getByText("+"));
    expect(Number(screen.getByTestId("count").textContent)).toEqual(1);
});

test('clicking - decrements the count', () => {
    // Complete the unit test below based on the objective in the line above
    render(<Counter />);
    const Message = screen.getByText(/Counter/i);
    expect(Message).toBeInTheDocument();
    userEvent.click(screen.getByText("-"));
    expect(Number(screen.getByTestId("count").textContent)).toEqual(-1);

});

