import React from 'react';

interface TodoItemProps {
  todo: { id: number; description: string; completed: boolean };
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, description: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newDescription, setNewDescription] = React.useState(todo.description);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing && newDescription !== todo.description) {
      editTodo(todo.id, newDescription);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <span
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.description}
        </span>
      )}
      <button onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? 'Uncomplete' : 'Complete'}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
