import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from '../components/TodoList';

const todos = [
  { id: 1, description: 'Test Todo 1', completed: false },
  { id: 2, description: 'Test Todo 2', completed: true },
];

test('renders TodoList with todos', () => {
  const { getByText } = render(
    <TodoList
      todos={todos}
      toggleComplete={() => {}}
      deleteTodo={() => {}}
      editTodo={() => {}}
    />
  );

  expect(getByText('Test Todo 1')).toBeInTheDocument();
  expect(getByText('Test Todo 2')).toBeInTheDocument();
});
