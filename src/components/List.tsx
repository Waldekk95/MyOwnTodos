import "./List.css";
import Item from "./Item";
import React, { useState, useEffect } from "react";

const List = (props: { items: any[] }) => {
  const [todos, setTodos] = useState([
    { name: "Odkurzyć dom", time: 30, id: "A2" },
    { name: "Zrobić todosa", time: 45, id: "A1" },
    { name: "Napisać apkę", time: 20, id: "A3" },
  ]);

  useEffect(() => {
    if (props.items.length > 0) {
      const newItem = props.items[props.items.length - 1];
      setTodos((prevTodos) => [...prevTodos, newItem]);
    }
  }, [props.items]);

  const sortTodosByName = () => {
    const sortTodos = [...todos];
    sortTodos.sort((a, b) => a.name.localeCompare(b.name));
    setTodos(sortTodos);
  };

  const deleteItemHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className="list">
      <h3 className="list-title">Lista zadań</h3>
      <button className="form-button" onClick={() => sortTodosByName()} >
        Sortuj po nazwie
      </button>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todosName={todo.name}
          todosTime={todo.time}
          id={todo.id}
          onDelete={deleteItemHandler}
        />
      ))}
      <p>Suma wszystkich zadań: {todos.length}</p>
    </ul>
  );
};

export default List;
