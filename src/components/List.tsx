import "./List.css";
import Item from "./Item";
import React, { useState, useEffect } from "react";

const List = (props: { items: any[] }) => {
  const [todos, setTodos] = useState([
    { name: "Odkurzyć", time: 30, id: "A1" },
    { name: "Zrobić todosa", time: 15, id: "A2" },
    { name: "Bezbłędnie pisać", time: 60, id: "A3" },
    { name: "Napisać dobrą apkę w React", time: 55, id: "A4" },
    { name: "Ambitnie dzialać dalej", time: 5, id: "A5" },
    { name: "Wykonać stage 4 i 5", time: 35, id: "A6" },
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

  const sortTodosByTime = () => {
    const sortTodos = [...todos];
    sortTodos.sort((a, b) => a.time.toString().localeCompare(b.time.toString()));
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
      <button className="form-button" onClick={() => sortTodosByTime()} >
        Sortuj po czasie trwania
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
      <h3>Suma zadań do zrobienia: <b>{todos.length}</b></h3>
    </ul>
  );
};

export default List;
