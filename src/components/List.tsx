import "./List.css";
import Item from "./Item";
import React, { useState, useEffect } from "react";

const List = (props: { items: any[] }) => {
  const [todos, setTodos] = useState([
    { name: "Odkurzyć", time: 30, isComplete: false, id: "A1" },
    { name: "Zrobić todosa", time: 15, isComplete: false, id: "A2" },
    { name: "Bezbłędnie pisać", time: 60, isComplete: false, id: "A3" },
    { name: "Napisać dobrą apkę w React", time: 55, isComplete: false, id: "A4" },
    { name: "Ambitnie dzialać dalej", time: 5, isComplete: false, id: "A5" },
    { name: "Wykonać stage 4 i 5", time: 35, isComplete: false, id: "A6" },
  ]);

  useEffect(() => {
    if (props.items.length > 0) {
      const newItem = props.items[props.items.length - 1];
      setTodos((prevTodos) => [...prevTodos, newItem]);
    }
  }, [props.items]);

  const [editTodoId, setEditTodoId] = useState<string | null>(null);
  const [editText, setEditText] = useState<string>("");
  const [editTime, setEditTime] = useState<number>(0);

  const startEditing = (id: string, currentText: string, currentTime: number) => {
    setEditTodoId(id);
    setEditText(currentText);
    setEditTime(currentTime);
  };

  const saveEdit = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, name: editText, time: editTime } : todo
      )
    );
    setEditTodoId(null);
    setEditText("");
    setEditTime(0);
  };

  const cancelEdit = () => {
    setEditTodoId(null);
    setEditText("");
    setEditTime(0);
  };

  const deleteItemHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const sortTodosByName = () => {
    const sortTodos = [...todos];
    sortTodos.sort((a, b) => a.name.localeCompare(b.name));
    setTodos(sortTodos);
  };

  const sortTodosByTime = () => {
    const sortTodos = [...todos];
    sortTodos.sort((a, b) => a.time - b.time);
    setTodos(sortTodos);
  };

  return (
    <ul className="list">
      <h3 className="list-title">Lista zadań</h3>
      <button className="form-button" onClick={sortTodosByName}>
        Sortuj po nazwie
      </button>
      <button className="form-button" onClick={sortTodosByTime}>
        Sortuj po czasie trwania
      </button>
      {todos.map((todo) => (
        <Item
          key={todo.id}
          id={todo.id}
          todosName={todo.name}
          todosTime={todo.time}
          isCompleted={todo.isComplete}
          isEditing={editTodoId === todo.id}
          editText={editTodoId === todo.id ? editText : ""}
          editTime={editTodoId === todo.id ? editTime : 0}
          onDelete={deleteItemHandler}
          onStartEditing={startEditing}
          onSaveEdit={() => saveEdit(todo.id)}
          onCancelEdit={cancelEdit}
          onEditTextChange={(e) => setEditText(e.target.value)}
          onEditTimeChange={(e) => setEditTime(Number(e.target.value))}
        />
      ))}
      <h3>Suma zadań do zrobienia: <b>{todos.length}</b></h3>
    </ul>
  );
};

export default List;
