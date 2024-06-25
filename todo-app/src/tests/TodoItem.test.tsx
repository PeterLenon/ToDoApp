import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoItem from '../components/TodoItem';

const todo = { id: 1, description: 'Test Todo', completed: false };

test('renders TodoItem and toggles completion', () => {
  const toggleComplete = jest.fn();
  const { getByText } = render(
    <TodoItem
      todo={todo}
      toggleComplete={toggleComplete}
      deleteTodo={() => {}}
      editTodo={() => {}}
    />
  );

  fireEvent.click(getByText('Complete'));
  expect(toggleComplete).toHaveBeenCalledWith(1);
});
