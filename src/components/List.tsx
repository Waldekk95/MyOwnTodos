import "./List.css";
import Item from "./Item";
import React, { useState, useEffect } from "react";

const List = (props: { items: any[] }) => {
  const [todos, setTodos] = useState([
    { name: "Zrobic zakupy", age: 30, id: "A1" },
    { name: "Poprzątać dom", age: 45, id: "A2" },
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
      {todos.map((todo) => (
        <Item
          key={todo.id}
          todosName={todo.name}
          todosTime={todo.age}
          id={todo.id}
          onDelete={deleteItemHandler}
        />
      ))}
    </ul>
  );
};

export default List;
