import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoForm from '../components/TodoForm';

test('renders TodoForm and adds a todo', () => {
  const addTodo = jest.fn();
  const { getByPlaceholderText, getByText } = render(<TodoForm addTodo={addTodo} />);
  
  fireEvent.change(getByPlaceholderText('Add a new todo'), { target: { value: 'Test Todo' } });
  fireEvent.click(getByText('Add Todo'));

  expect(addTodo).toHaveBeenCalledWith('Test Todo');
});
