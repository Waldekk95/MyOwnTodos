import "./List.css";
import Item from "./Item";
import React, { useState, useEffect } from "react";

const List = (props: { items: any[] }) => {
  const [todos, setTodos] = useState([
    { name: "Zrobic zakupy", time: 45, id: "A1" },
    { name: "Odkurzyć dom", time: 30, id: "A2" },
  ]);

  // Efekt, który aktualizuje stan przy dodaniu nowego elementu
  useEffect(() => {
    if (props.items.length > 0) {
      // Dodajemy tylko ostatni dodany element z props.items
      const newItem = props.items[props.items.length - 1];
      setTodos((prevTodos) => [...prevTodos, newItem]);
    }
  }, [props.items]);

  // Funkcja do usuwania elementu
  const deleteItemHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className="list">
      <h3 className="list-title">List zadań</h3>
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
