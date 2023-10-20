import React from 'react';

export default function Todo({ todo }) {
  console.log(todo);
  return (
    <>
      <p>{todo.newTodo}</p>
      <p>{todo.isComplete}</p>
    </>
  );
}
