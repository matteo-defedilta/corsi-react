import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos }) {
  console.log(todos);
  return (
    <>
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo}></Todo>;
      })}
    </>
  );
}
